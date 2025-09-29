import { RefreshCw } from "lucide-react";

const RefreshInfo = ({ show }) => {
  return (
    show && (
      <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
        <div className="flex items-center space-x-2">
          <RefreshCw className="size-4 animate-spin" />
          <span>Güncelleniyor</span>
        </div>
      </div>
    )
  );
};

export default RefreshInfo;
