const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.protect = async (req, res, next) => {
  try {
    // Get token from cookie
    const accessToken = req.cookies.accessToken;

    if (!accessToken) {
      return res
        .status(401)
        .json({ message: "Not authorized to access this route" });
    }

    // Verify token
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

    // Check if user still exists
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "User no longer exists" });
    }

    // Grant access to protected route
    req.user = user;
    next();
  } catch (error) {
    // access tokenın süresi dolduysa özel hata mesajı gönder
    if (error.message === "jwt expired") {
      return res.status(401).json({ message: "Access token expired" });
    }

    res.status(401).json({ message: "Not authorized to access this route" });
  }
};

// Admin middleware
exports.admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Access denied. Admin only." });
  }
};
