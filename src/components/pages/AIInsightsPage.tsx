import { useState } from 'react';
import { MessageSquare, Send, Bot, User, TrendingUp, AlertCircle, CheckCircle, ArrowRight, Zap, BarChart3 } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Textarea } from '../ui/textarea';

interface AIInsightsPageProps {
  onPageChange: (page: string) => void;
  userType?: 'startup' | 'investor';
}

interface ChatMessage {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface InsightCard {
  title: string;
  description: string;
  type: 'trend' | 'recommendation' | 'alert' | 'success';
  value?: string;
  change?: string;
}

export function AIInsightsPage({ onPageChange, userType = 'investor' }: AIInsightsPageProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: 'assistant',
      content: "Hello! I'm your AI investment assistant. I can help you analyze startup metrics, funding trends, and provide investment recommendations. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on current market trends, FinTech startups are showing strong growth with an average 23% IRR. I recommend focusing on companies with proven revenue models and experienced founding teams.",
        "The startup you're analyzing shows healthy growth metrics with 15% month-over-month user acquisition. However, their burn rate indicates they'll need additional funding within 8-10 months.",
        "Market analysis suggests CleanTech investments are gaining momentum due to regulatory support. Consider diversifying 20-30% of your portfolio in this sector for long-term returns.",
        "Risk assessment: This startup has a moderate risk profile. Strong technical team and market validation, but limited financial runway. Recommended investment: $25K-50K range."
      ];

      const aiMessage: ChatMessage = {
        id: messages.length + 2,
        role: 'assistant',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const quickQuestions = [
    "What are the current funding trends?",
    "Analyze EcoTech Solutions performance",
    "Best sectors for investment this quarter",
    "Risk assessment for my portfolio"
  ];

  const aiInsights: InsightCard[] = [
    {
      title: "Market Trend Alert",
      description: "FinTech sector showing 31% growth this quarter",
      type: "trend",
      change: "vs last quarter"
    },
    {
      title: "Portfolio Recommendation",
      description: "Consider rebalancing towards AI/ML startups",
      type: "recommendation"
    },
    {
      title: "Risk Warning",
      description: "EcoTech Solutions approaching funding deadline",
      type: "alert"
    },
    {
      title: "Investment Success",
      description: "HealthAI Inc exceeded growth projections",
      type: "success",
      change: "returns"
    }
  ];

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'trend':
        return <TrendingUp className="w-5 h-5" />;
      case 'recommendation':
        return <Zap className="w-5 h-5" />;
      case 'alert':
        return <AlertCircle className="w-5 h-5" />;
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      default:
        return <BarChart3 className="w-5 h-5" />;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'trend':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'recommendation':
        return 'bg-purple-50 text-purple-600 border-purple-200';
      case 'alert':
        return 'bg-red-50 text-red-600 border-red-200';
      case 'success':
        return 'bg-green-50 text-green-600 border-green-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-background border-b border-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center mr-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-accent">AI Insights</h1>
                <p className="text-white">Intelligent analysis and recommendations powered by AI</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => onPageChange('dashboard')}>
              Back to Dashboard
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Chat Interface */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="h-[600px] flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  AI Assistant Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-3 max-w-[80%] ${
                        message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.role === 'user' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
                        }`}>
                          {message.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                        </div>
                        <div className={`p-4 rounded-2xl ${
                          message.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white border border-gray-200 text-gray-900'
                        }`}>
                          <p className="text-sm">{message.content}</p>
                          <p className={`text-xs mt-2 ${
                            message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white">
                          <Bot className="w-4 h-4" />
                        </div>
                        <div className="bg-background border border-gray-200 p-4 rounded-2xl">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-6 border-t border-white-200">
                  <div className="flex space-x-3">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Ask about startup metrics, funding trends, or investment advice..."
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} disabled={isLoading || !inputMessage.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Quick Questions */}
                  <div className="mt-4">
                    <p className="text-sm text-white mb-2">Quick questions:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickQuestions.map((question, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => setInputMessage(question)}
                          className="text-xs"
                        >
                          {question}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Insights Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Real-time Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${getInsightColor(insight.type)}`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center">
                          {getInsightIcon(insight.type)}
                          <h3 className="font-medium ml-2">{insight.title}</h3>
                        </div>
                        {insight.value && (
                          <Badge variant="outline" className="text-xs">
                            {insight.value}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm opacity-80">{insight.description}</p>
                      {insight.change && (
                        <p className="text-xs opacity-60 mt-1">{insight.change}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-blue-900">Funding Volume</span>
                      <span className="text-lg font-bold text-blue-600">$2.4B</span>
                    </div>
                    <p className="text-xs text-blue-700">+15% this quarter</p>
                  </div>
                  
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-green-900">Success Rate</span>
                      <span className="text-lg font-bold text-green-600">68%</span>
                    </div>
                    <p className="text-xs text-green-700">Above industry average</p>
                  </div>
                  
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-purple-900">Avg. Valuation</span>
                      <span className="text-lg font-bold text-purple-600">$12M</span>
                    </div>
                    <p className="text-xs text-purple-700">Seed to Series A</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full justify-between"
                    onClick={() => onPageChange('startups')}
                  >
                    <span className="text-sm">Review new opportunities</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-between"
                    onClick={() => onPageChange('trustspv')}
                  >
                    <span className="text-sm">Optimize TrustSPV allocation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-between"
                    onClick={() => onPageChange('dashboard')}
                  >
                    <span className="text-sm">Update portfolio strategy</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}