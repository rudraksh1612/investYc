import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  User,
  Building2,
  TrendingUp,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui/tabs";

interface LoginPageProps {
  onPageChange: (page: string) => void;
  onLogin?: (
    userType: "startup" | "investor",
  ) => void;
}

export function LoginPage({
  onPageChange,
  onLogin,
}: LoginPageProps) {
  const [selectedTab, setSelectedTab] = useState("startup");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    if (onLogin) {
      onLogin(
        selectedTab as "startup" | "investor",
      );
    }
    onPageChange("dashboard");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const userTypes = [
    {
      value: "startup",
      label: "Startup",
      icon: Building2,
      description: "Raise funds for your company",
    },
    {
      value: "investor",
      label: "Investor",
      icon: TrendingUp,
      description: "Discover investment opportunities",
    },
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">
              I
            </span>
          </div>
          <h1 className="text-3xl text-white font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Sign in to your Investyc account
          </p>
        </div>

        <Card className="shadow-xl border-0 bg-background">
          <CardContent className="p-8">
            <Tabs
              value={selectedTab}
              onValueChange={setSelectedTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2 mb-8">
                {userTypes.map((type) => (
                  <TabsTrigger
                    key={type.value}
                    value={type.value}
                    className="flex flex-col items-center gap-1 py-3"
                  >
                    <type.icon className="w-4 h-4" />
                    <span className="text-xs">
                      {type.label}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {userTypes.map((type) => (
                <TabsContent
                  key={type.value}
                  value={type.value}
                >
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="text-center mb-6">
                      <type.icon className={`w-12 h-12 mx-auto mb-3 ${type.value ==="startup" ? 'text-green-600' : 'text-blue-600'}`} />
                      <h2 className="text-xl font-semibold text-white">
                        {type.label} Login
                      </h2>
                      <p className="text-sm text-white-600">
                        {type.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="password">
                          Password
                        </Label>
                        <div className="relative">
                          <Input
                            id="password"
                            name="password"
                            type={
                              showPassword ? "text" : "password"
                            }
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowPassword(!showPassword)
                            }
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          >
                            {showPassword ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-2 rounded"
                        />
                        <span className="text-gray-600">
                          Remember me
                        </span>
                      </label>
                      <button
                        type="button"
                        onClick={() =>
                          onPageChange("forgot-password")
                        }
                        className="text-white hover:text-white"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
                    >
                      Sign In as {type.label}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>

                    <div className="text-center text-sm text-gray-600">
                      Don't have an account?{" "}
                      <button
                        type="button"
                        onClick={() => onPageChange("signup")}
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Sign up here
                      </button>
                    </div>
                  </form>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <div className="mt-8 p-4 bg-blue-50 rounded-xl">
          <h3 className="font-medium text-gray-900 mb-2">
            Demo Credentials
          </h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <strong>Startup:</strong> startup@demo.com /
              password123
            </p>
            <p>
              <strong>Investor:</strong> investor@demo.com /
              password123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}