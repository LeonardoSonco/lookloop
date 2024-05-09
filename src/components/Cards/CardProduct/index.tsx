
import "./index.css"

const CardProduct = () => {
  return (
    <div className="borderCard">
      <h4 className="font-bold text-lg">Pomada Modeladora</h4>
      <span className="text-sm">Clear Johnson</span>
      <img
        src="https://t41847.vteximg.com.br/arquivos/ids/10691224-547-547/48033.jpg?v=638370251464730000"
        alt=""
        className="w-36 h-28 object-contain "
      />
      <span className="text-gray-400 text-sm font-semibold">Estoque: 500</span>
      <span className="text-2xl font-semibold">R$ 30,00</span>
    </div>
  );
};

export default CardProduct;
