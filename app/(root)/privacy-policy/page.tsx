
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, FileText, Lock, Shield, Users } from "lucide-react";

export default async function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-green-100 rounded-full">
            <Shield className="h-12 w-12 text-green-800" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your privacy is important to us. This policy explains how we collect, use, and protect
          your personal information when you use our services.
        </p>
        <div className="mt-6 text-sm text-muted-foreground">
          <p>Last updated: July 11, 2025</p>
        </div>
      </section>

      {/* Quick Overview */}
      <section className=" max-w-5xl mx-auto px-4 mb-16">
        <Card className="p-6 bg-green-50 dark:bg-green-900/20">
          <CardHeader>
            <CardTitle className="text-2xl">Privacy at a Glance</CardTitle>
            <CardDescription>
              Here is what you need to know about how we handle your data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <Eye className="h-6 w-6 text-green-800 mt-1" />
                <div>
                  <h4 className="font-medium">Data Collection</h4>
                  <p className="text-sm text-muted-foreground">
                    We only collect information necessary to provide our services
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Lock className="h-6 w-6 text-green-800 mt-1" />
                <div>
                  <h4 className="font-medium">Data Security</h4>
                  <p className="text-sm text-muted-foreground">
                    Your data is encrypted and stored securely
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-medium">Data Sharing</h4>
                  <p className="text-sm text-muted-foreground">
                    We never sell your personal information to third parties
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2 h-6 w-6 text-green-800" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Personal Information</h4>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Name, email address, phone number</li>
                <li>Resume and professional profile information</li>
                <li>Employment history and education details</li>
                <li>Skills and qualifications</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Cookies and Tracking</h4>
              <p className="text-muted-foreground">
                We use cookies to enhance your experience, remember your preferences, and analyze site usage.
                You can control cookie settings through your browser.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lock className="mr-2 h-6 w-6 text-green-800" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Technical Safeguards</h4>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>SSL encryption for all data transmission</li>
                <li>Secure database storage with regular backups</li>
                <li>Multi-factor authentication for account access</li>
                <li>Regular security audits and updates</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Rights and Choices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Account Management</h4>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Access and update your personal information</li>
                <li>Control your profile visibility settings</li>
                <li>Manage email preferences and notifications</li>
                <li>Delete your account at any time</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Data Rights</h4>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Request a copy of your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Exercise Your Rights</h4>
              <p className="text-muted-foreground">
                To exercise any of these rights, please contact us at privacy@diplomajobs.com
                or use the settings in your account dashboard.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
