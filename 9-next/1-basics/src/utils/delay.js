// api iteği atarmış gibi yapıcak olan fonksiyon
// çağrıldığında 1 saniye süren asenkron bir işlem çalıştırsın
const delay = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

export default delay;
