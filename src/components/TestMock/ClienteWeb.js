import axios from "axios";

export default class ClienteWeb {
  cargarClientes = () => {
    var url = "http://northwind.netcore.io/customers.json";
    return axios.get(url);
  };
}
