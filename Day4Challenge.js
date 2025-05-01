// Task 1
    const flattenObject = (obj, prefix = '') => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      const newKey = prefix ? `${prefix}.${key}` : key;
  
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        Object.assign(acc, flattenObject(value, newKey));
      } else {
        acc[newKey] = value;
      }
  
      return acc;
    }, {});
  };
  
  // Example usage:
  const nested = {
    user: { name: "Alice", age: 25 },
    address: { city: "NY", zip: 10001 }
  };
  
  const flattened = flattenObject(nested);
  console.log(`Flattened: ${JSON.stringify(flattened, null, 2)}`);

  //Task 2
    const groupBy = (arr, key) => {
        return arr.reduce((acc, item) => {
          const groupKey = item[key];
          acc[groupKey] = [...(acc[groupKey] || []), item];
          return acc;
        }, {});
      };
      
      // Example usage:
      const items = [
        { id: 1, category: "Electronics", name: "Laptop" },
        { id: 2, category: "Clothing", name: "Shirt" },
        { id: 3, category: "Electronics", name: "Phone" }
      ];
      
      const grouped = groupBy(items, "category");
      console.log(`Grouped: ${JSON.stringify(grouped, null, 2)}`);

      // Task 3
      const transformData = (data, config) => {
        if (!Array.isArray(data) || typeof config !== 'object') return [];
      
        const { rename = {}, filter = {}, add = {} } = config;
      
        return data
          .filter(item => Object.entries(filter).every(([key, val]) => item[key] === val))
          .map(item => {
            const renamed = Object.entries(item).reduce((acc, [key, value]) => {
              const newKey = rename[key] || key;
              acc[newKey] = value;
              return acc;
            }, {});
            return { ...renamed, ...add };
          });
      };
      
      // Example usage:
      const data = [
        { id: 1, category: "A", value: 10 },
        { id: 2, category: "B", value: 20 },
        { id: 3, category: "A", value: 30 }
      ];
      
      const config = {
        rename: { category: "type", value: "amount" },
        filter: { category: "A" },
        add: { status: "active" }
      };
      
      const transformed = transformData(data, config);
      console.log(`Transformed: ${JSON.stringify(transformed, null, 2)}`);
      


  