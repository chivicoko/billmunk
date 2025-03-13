
export const menuItems = [
    {id: 1, title: "Home", url: '/', icon: 'home.svg', ref: 'Home' },
    {id: 2, title: "My Banks", url: '/my-banks', icon: 'building-06.svg', ref: 'MyBanks' },
    {id: 3, title: "Transaction History", url: '/transfer-history', icon: 'user-shield-01.svg', ref: 'TransactionHistory' },
    {id: 4, title: "Payment Transfer", url: '/payment-transfer', icon: 'user-group.svg', ref: 'PaymentTransfer' },
    {id: 5, title: "Connect Bank", url: '/connect-bank', icon: 'setting-05.svg', ref: 'ConnectBank' },
];

export const CardStatusDistribution = [
    {id: 1, cards: 950, name: 'Active' },
    {id: 2, cards: 300, name: 'Expired' },
    {id: 3, cards: 70, name: 'Inactive' },
    {id: 4, cards: 90, name: 'Blocked' },
    {id: 5, cards: 120, name: 'Lost' },
];
  
export const PIE_COLORS = ['#1d4ed8', '#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe'];

export const HomeTabs = [
    {id: 1, name: 'Chase Bank' },
    {id: 2, name: 'Bank of America' },
    {id: 3, name: 'First Platypus Bank' },
];

export const recentCardRequestTableHead = [
    {id: 1, title: "Transaction"},
    {id: 2, title: "Amount"},
    {id: 3, title: "Status"},
    {id: 4, title: "Date"},
    {id: 5, title: "Category"},
];

export const cardRequests = [
    {id: 1, transaction: "Spotify", amount: '1,500', date: 'Wed 23:21pm', status: 'Success', category: 'Subscriptions', avatar: '2.jpeg' },
    {id: 2, transaction: "Alexa Doe", amount: '500', date: 'Wed 23:21pm', status: 'Declined', category: 'Deposit', avatar: 'default_avatar.png' },
    {id: 3, transaction: "Figma", amount: '1,500', date: 'Wed 23:21pm', status: 'Processing', category: 'Income', avatar: '3.jpeg' },
    {id: 4, transaction: "Fresh F&V", amount: '300', date: 'Wed 23:21pm', status: 'Success', category: 'Groceries', avatar: '5.jpeg' },
    {id: 5, transaction: "Sam Sulek", amount: '1,500', date: 'Wed 23:21pm', status: 'Processing', category: 'Food', avatar: 'default_avatar.png' },
];

export const budgets = [
    {id: 1, text1: "Subscriptions", text2: '$28 left', icon: 'setting-05.svg', bg: 'gray', overallColor: 'blue', progress: '25' },
    {id: 2, text1: "Food and booze", text2: '$120 left', icon: 'package-check.svg', bg: 'orange', overallColor: 'green', progress: '75' },
    {id: 3, text1: "Savings", text2: '$50 left', icon: 'credit-card-pos.svg', bg: 'green', overallColor: 'red', progress: '40' },
];