// Initial inventory array
const inventory = [
    { id: 1, name: "Laptop", price: 1000, stock: 5 },
    { id: 2, name: "Phone", price: 500, stock: 10 },
    { id: 3, name: "Tablet", price: 300, stock: 0 }
  ];
  
  // Arrow function to manage inventory based on action type
  const manageInventory = (items, action) => {
    switch (action.type) {
      case "filterStock":
        const minStock = action.minStock ?? 0;
        return items.filter(item => item.stock > minStock);
  
      case "highValue":
        return items.filter(item => item.price > 600);
  
      case "summary":
        const totalValue = items.reduce((sum, item) => sum + (item.price * item.stock), 0);
        const itemCount = items.length;
        return { itemCount, totalValue };
  
      default:
        return [];
    }
  };
  
  // Testing different actions
  const actions = [
    { type: "filterStock", minStock: 0 },
    { type: "highValue" },
    { type: "summary" }
  ];
  
  actions.forEach(action => {
    const result = manageInventory(inventory, action);
    console.log(`Action: ${action.type}`);
    console.log(JSON.stringify(result, null, 2));
  });
  