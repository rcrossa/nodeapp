export default class MockClienteWeb {
  static listaClientes = {
    data: {
      customers: [
        {
          id: "ALFKI",
          companyName: "Alfreds Futterkiste",
          contactName: "Maria Anders",
          contactTitle: "Sales Representative",
          address: "Obere Str. 57",
          city: "Berlin",
          postalCode: "12209",
          country: "Germany",
          phone: "030-0074321",
          fax: "030-0076545"
        },
        {
          id: "ANATR",
          companyName: "Ana Trujillo Emparedados y helados",
          contactName: "Ana Trujillo",
          contactTitle: "Owner",
          address: "Avda. de la Constitución 2222",
          city: "México D.F.",
          postalCode: "05021",
          country: "Mexico",
          phone: "(5) 555-4729",
          fax: "(5) 555-3745"
        },
        {
          id: "ANTON",
          companyName: "Antonio Moreno Taquería",
          contactName: "Antonio Moreno",
          contactTitle: "Owner",
          address: "Mataderos  2312",
          city: "México D.F.",
          postalCode: "05023",
          country: "Mexico",
          phone: "(5) 555-3932"
        }
      ],
      responseStatus: {}
    }
  };

  cargarClientes = () =>
    new Promise(resolve => resolve(MockClienteWeb.listaClientes));
}
