export type Product = {
    id: string;
    name: string;
    price: number;
    category: string;
    vendor: string;
  };
  
  export type Cart = {
    id: string;
    content: Product[];
    owner: string;
    total: number;
  };
  
  export const fakeCarts: Cart[] = [
    {
      id: 'cart001',
      content: [
        {
          id: 'abc1234',
          name: 'Wireless Mouse',
          price: 29.99,
          category: 'Electronics',
          vendor: 'TechGear'
        },
        {
          id: 'def5678',
          name: 'Bluetooth Keyboard',
          price: 49.99,
          category: 'Electronics',
          vendor: 'KeyMasters'
        }
      ],
      owner: 'John Doe',
      total: 29.99 + 49.99
    },
    {
      id: 'cart002',
      content: [
        {
          id: 'ghi9012',
          name: 'HD Monitor',
          price: 199.99,
          category: 'Electronics',
          vendor: 'ViewSonic'
        },
        {
          id: 'jkl3456',
          name: 'Gaming Headset',
          price: 79.99,
          category: 'Electronics',
          vendor: 'SoundWave'
        }
      ],
      owner: 'Jane Smith',
      total: 199.99 + 79.99
    },
    {
      id: 'cart003',
      content: [
        {
          id: 'mno7890',
          name: 'External Hard Drive',
          price: 89.99,
          category: 'Electronics',
          vendor: 'DataSafe'
        },
        {
          id: 'pqr2345',
          name: 'Smartphone Stand',
          price: 19.99,
          category: 'Accessories',
          vendor: 'HoldIt'
        }
      ],
      owner: 'Alice Johnson',
      total: 89.99 + 19.99
    },
    {
      id: 'cart004',
      content: [
        {
          id: 'stu6789',
          name: 'USB-C Hub',
          price: 34.99,
          category: 'Electronics',
          vendor: 'PortPlus'
        },
        {
          id: 'vwx1234',
          name: 'Portable Charger',
          price: 39.99,
          category: 'Electronics',
          vendor: 'PowerMax'
        }
      ],
      owner: 'Bob Brown',
      total: 34.99 + 39.99
    },
    {
      id: 'cart005',
      content: [
        {
          id: 'yz12345',
          name: 'Fitness Tracker',
          price: 59.99,
          category: 'Electronics',
          vendor: 'FitLife'
        },
        {
          id: 'abc6789',
          name: 'Wireless Earbuds',
          price: 69.99,
          category: 'Electronics',
          vendor: 'EarCandy'
        }
      ],
      owner: 'Charlie Green',
      total: 59.99 + 69.99
    },
    {
      id: 'cart006',
      content: [
        {
          id: 'def0123',
          name: 'Smartwatch',
          price: 149.99,
          category: 'Electronics',
          vendor: 'WristTech'
        },
        {
          id: 'ghi4567',
          name: 'LED Desk Lamp',
          price: 24.99,
          category: 'Home',
          vendor: 'BrightLight'
        }
      ],
      owner: 'Daisy White',
      total: 149.99 + 24.99
    },
    {
      id: 'cart007',
      content: [
        {
          id: 'jkl8901',
          name: 'Laptop Sleeve',
          price: 17.99,
          category: 'Accessories',
          vendor: 'SafeGuard'
        },
        {
          id: 'mno2345',
          name: 'Tablet Case',
          price: 22.99,
          category: 'Accessories',
          vendor: 'CoverPro'
        }
      ],
      owner: 'Edward Black',
      total: 17.99 + 22.99
    },
    {
      id: 'cart008',
      content: [
        {
          id: 'pqr6789',
          name: 'Bluetooth Speaker',
          price: 45.99,
          category: 'Electronics',
          vendor: 'SoundBlast'
        },
        {
          id: 'abc1234',
          name: 'Wireless Mouse',
          price: 29.99,
          category: 'Electronics',
          vendor: 'TechGear'
        }
      ],
      owner: 'Fiona Blue',
      total: 45.99 + 29.99
    },
    {
      id: 'cart009',
      content: [
        {
          id: 'def5678',
          name: 'Bluetooth Keyboard',
          price: 49.99,
          category: 'Electronics',
          vendor: 'KeyMasters'
        },
        {
          id: 'ghi9012',
          name: 'HD Monitor',
          price: 199.99,
          category: 'Electronics',
          vendor: 'ViewSonic'
        }
      ],
      owner: 'George Red',
      total: 49.99 + 199.99
    },
    {
      id: 'cart010',
      content: [
        {
          id: 'jkl3456',
          name: 'Gaming Headset',
          price: 79.99,
          category: 'Electronics',
          vendor: 'SoundWave'
        },
        {
          id: 'mno7890',
          name: 'External Hard Drive',
          price: 89.99,
          category: 'Electronics',
          vendor: 'DataSafe'
        }
      ],
      owner: 'Hannah Purple',
      total: 79.99 + 89.99
    },
    {
      id: 'cart011',
      content: [
        {
          id: 'pqr2345',
          name: 'Smartphone Stand',
          price: 19.99,
          category: 'Accessories',
          vendor: 'HoldIt'
        },
        {
          id: 'stu6789',
          name: 'USB-C Hub',
          price: 34.99,
          category: 'Electronics',
          vendor: 'PortPlus'
        }
      ],
      owner: 'Ian Yellow',
      total: 19.99 + 34.99
    },
    {
      id: 'cart012',
      content: [
        {
          id: 'vwx1234',
          name: 'Portable Charger',
          price: 39.99,
          category: 'Electronics',
          vendor: 'PowerMax'
        },
        {
          id: 'yz12345',
          name: 'Fitness Tracker',
          price: 59.99,
          category: 'Electronics',
          vendor: 'FitLife'
        }
      ],
      owner: 'Jack Orange',
      total: 39.99 + 59.99
    },
    {
      id: 'cart013',
      content: [
        {
          id: 'abc6789',
          name: 'Wireless Earbuds',
          price: 69.99,
          category: 'Electronics',
          vendor: 'EarCandy'
        },
        {
          id: 'def0123',
          name: 'Smartwatch',
          price: 149.99,
          category: 'Electronics',
          vendor: 'WristTech'
        }
      ],
      owner: 'Karen Pink',
      total: 69.99 + 149.99
    },
    {
      id: 'cart014',
      content: [
        {
          id: 'ghi4567',
          name: 'LED Desk Lamp',
          price: 24.99,
          category: 'Home',
          vendor: 'BrightLight'
        },
        {
          id: 'jkl8901',
          name: 'Laptop Sleeve',
          price: 17.99,
          category: 'Accessories',
          vendor: 'SafeGuard'
        }
      ],
      owner: 'Larry Cyan',
      total: 24.99 + 17.99
    },
    {
      id: 'cart015',
      content: [
        {
          id: 'mno2345',
          name: 'Tablet Case',
          price: 22.99,
          category: 'Accessories',
          vendor: 'CoverPro'
        },
        {
          id: 'pqr6789',
          name: 'Bluetooth Speaker',
          price: 45.99,
          category: 'Electronics',
          vendor: 'SoundBlast'
        }
      ],
      owner: 'Megan Lime',
      total: 22.99 + 45.99
    }
  ];
  