"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Dashboard() {
  const [genBalance] = useState(2500);
  const [usdValue] = useState(genBalance * 0.0010);
  const [purchaseHistory] = useState([
    { date: "2025-04-01", amount: 1000, price: 0.0010, total: 1 },
    { date: "2025-04-03", amount: 1500, price: 0.0010, total: 1.5 },
  ]);
  
  return (
    <main className="flex min-h-screen flex-col items-start">
      <div className="w-full bg-green-800 text-white py-10 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p className="text-lg mb-6">Manage your GEN Coin holdings and transactions</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-green-700 p-6 rounded-lg">
              <h2 className="text-xl font-medium mb-2">GEN Balance</h2>
              <p className="text-3xl font-bold">{genBalance.toLocaleString()} GEN</p>
              <p className="text-green-300 mt-1">≈ ${usdValue.toFixed(2)} USD</p>
            </div>
            
            <div className="bg-green-700 p-6 rounded-lg">
              <h2 className="text-xl font-medium mb-2">Current Price</h2>
              <p className="text-3xl font-bold">$0.0010</p>
              <p className="text-green-300 mt-1">Next: $0.0018 (+80%)</p>
            </div>
            
            <div className="bg-green-700 p-6 rounded-lg">
              <h2 className="text-xl font-medium mb-2">Presale Ends In</h2>
              <p className="text-3xl font-bold">27d : 02h : 45m</p>
              <p className="text-green-300 mt-1">Get more GEN before price increase!</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto py-8 px-4">
        <Tabs defaultValue="myholdings" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="myholdings">My Holdings</TabsTrigger>
            <TabsTrigger value="purchases">Purchase History</TabsTrigger>
            <TabsTrigger value="referrals">Referrals</TabsTrigger>
          </TabsList>
          
          <TabsContent value="myholdings">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-800">Your GEN Coin Holdings</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-3 text-green-700">Token Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-700 mb-1">Balance: <span className="font-semibold">{genBalance.toLocaleString()} GEN</span></p>
                    <p className="text-gray-700 mb-1">USD Value: <span className="font-semibold">${usdValue.toFixed(2)}</span></p>
                    <p className="text-gray-700 mb-1">Token Contract: <span className="font-semibold text-sm">0x123...abc</span></p>
                  </div>
                  <div>
                    <p className="text-gray-700 mb-1">Current Price: <span className="font-semibold">$0.0010</span></p>
                    <p className="text-gray-700 mb-1">Unlocked Tokens: <span className="font-semibold">40% ({(genBalance * 0.4).toLocaleString()} GEN)</span></p>
                    <p className="text-gray-700 mb-1">Locked Tokens: <span className="font-semibold">60% ({(genBalance * 0.6).toLocaleString()} GEN)</span></p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <Button className="bg-green-600 hover:bg-green-500">
                  Buy More GEN
                </Button>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Share Referral Link
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="purchases">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-800">Purchase History</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-green-100">
                      <th className="py-3 px-4 text-left text-green-800">Date</th>
                      <th className="py-3 px-4 text-left text-green-800">Amount (GEN)</th>
                      <th className="py-3 px-4 text-left text-green-800">Price (USD)</th>
                      <th className="py-3 px-4 text-left text-green-800">Total (USD)</th>
                      <th className="py-3 px-4 text-left text-green-800">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {purchaseHistory.map((purchase, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-3 px-4 text-gray-700">{purchase.date}</td>
                        <td className="py-3 px-4 text-gray-700">{purchase.amount.toLocaleString()}</td>
                        <td className="py-3 px-4 text-gray-700">${purchase.price.toFixed(4)}</td>
                        <td className="py-3 px-4 text-gray-700">${purchase.total.toFixed(2)}</td>
                        <td className="py-3 px-4 text-green-600 font-medium">Completed</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="referrals">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-green-800">Referral Program</h2>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Share your unique referral link with friends and earn 5% of their GEN Coin purchases!
                </p>
                
                <div className="bg-gray-100 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-500 mb-1">Your Referral Link</p>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      value="https://gencoin.io/presale?ref=0x123abc"
                      readOnly
                      className="flex-1 border border-gray-300 rounded-md p-2 text-sm"
                    />
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                      Copy
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3 text-green-700">Referral Stats</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded-md p-4 text-center">
                    <p className="text-gray-500 text-sm">Referrals</p>
                    <p className="text-2xl font-bold text-green-700">0</p>
                  </div>
                  <div className="border border-gray-200 rounded-md p-4 text-center">
                    <p className="text-gray-500 text-sm">Total Volume</p>
                    <p className="text-2xl font-bold text-green-700">$0.00</p>
                  </div>
                  <div className="border border-gray-200 rounded-md p-4 text-center">
                    <p className="text-gray-500 text-sm">Total Earnings</p>
                    <p className="text-2xl font-bold text-green-700">$0.00</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-green-600 hover:bg-green-500">
                Share on Twitter
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
} 