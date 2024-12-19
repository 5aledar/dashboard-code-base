
  export type Cart = {
    id: string;
    products: string[];
    owner: string;
    total: number;
  };
  export const fakeCarts: Cart[] = [
    {
      id: 'cart001',
      products: ['abc1234', 'def5678'],
      owner: 'user001',
      total: parseFloat((29.99 + 49.99).toFixed(2))
    },
    {
      id: 'cart002',
      products: ['ghi9012', 'jkl3456'],
      owner: 'user002',
      total: parseFloat((199.99 + 79.99).toFixed(2))
    },
    {
      id: 'cart003',
      products: ['mno7890', 'pqr2345'],
      owner: 'user003',
      total: parseFloat((89.99 + 19.99).toFixed(2))
    },
    {
      id: 'cart004',
      products: ['stu6789', 'vwx1234'],
      owner: 'user004',
      total: parseFloat((34.99 + 39.99).toFixed(2))
    },
    {
      id: 'cart005',
      products: ['yz12345', 'abc6789'],
      owner: 'user005',
      total: parseFloat((59.99 + 69.99).toFixed(2))
    },
    {
      id: 'cart006',
      products: ['def0123', 'ghi4567'],
      owner: 'user006',
      total: parseFloat((149.99 + 24.99).toFixed(2))
    },
    {
      id: 'cart007',
      products: ['jkl8901', 'mno2345'],
      owner: 'user007',
      total: parseFloat((17.99 + 22.99).toFixed(2))
    },
    {
      id: 'cart008',
      products: ['pqr6789', 'abc1234'],
      owner: 'user008',
      total: parseFloat((45.99 + 29.99).toFixed(2))
    },
    {
      id: 'cart009',
      products: ['def5678', 'ghi9012'],
      owner: 'user009',
      total: parseFloat((49.99 + 199.99).toFixed(2))
    },
    {
      id: 'cart010',
      products: ['jkl3456', 'mno7890'],
      owner: 'user010',
      total: parseFloat((79.99 + 89.99).toFixed(2))
    },
    {
      id: 'cart011',
      products: ['pqr2345', 'stu6789'],
      owner: 'user011',
      total: parseFloat((19.99 + 34.99).toFixed(2))
    },
    {
      id: 'cart012',
      products: ['vwx1234', 'yz12345'],
      owner: 'user012',
      total: parseFloat((39.99 + 59.99).toFixed(2))
    },
    {
      id: 'cart013',
      products: ['abc6789', 'def0123'],
      owner: 'user013',
      total: parseFloat((69.99 + 149.99).toFixed(2))
    },
    {
      id: 'cart014',
      products: ['ghi4567', 'jkl8901'],
      owner: 'user014',
      total: parseFloat((24.99 + 17.99).toFixed(2))
    },
    {
      id: 'cart015',
      products: ['mno2345', 'pqr6789'],
      owner: 'user015',
      total: parseFloat((22.99 + 45.99).toFixed(2))
    }
  ];
  