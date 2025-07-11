
import { Metadata } from "next";
import {CheckCircle, FileText, Scale, Shield, XCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Terms of Service | Diploma Jobs BD",
  description:
    "Read the Terms of Service for Diploma Jobs BD to understand the rules and regulations for using our job portal.",
  keywords: [
    "Diploma Jobs BD",
    "terms of service",
    "job portal terms",
    "diploma job rules",
    "user agreement"
  ],
  openGraph: {
    title: "Terms of Service | Diploma Jobs BD",
    description:
      "Understand the terms and conditions for using Diploma Jobs BD’s services.",
    url: "https://diplomajobsbd.com/terms-of-service",
    siteName: "Diploma Jobs BD",
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-5xl mx-auto px-4  py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-green-100 rounded-full">
            <Scale className="h-12 w-12 text-green-600" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          These terms govern your use of our platform and services. Please read them carefully 
          before using Diploma Jobs.
        </p>
        <div className="mt-6 text-sm text-muted-foreground">
          <p>Last updated: July 11, 2025</p>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <Card className="p-6 bg-green-50 dark:bg-green-900/20">
          <CardHeader>
            <CardTitle className="text-2xl">Terms Summary</CardTitle>
            <CardDescription>
              Key points about using our platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Free for Job Seekers</h4>
                    <p className="text-sm text-muted-foreground">
                      Creating an account and searching for jobs is completely free
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Respectful Use</h4>
                    <p className="text-sm text-muted-foreground">
                      Use our platform responsibly and respect other users
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Accurate Information</h4>
                    <p className="text-sm text-muted-foreground">
                      Provide truthful and accurate information in your profile
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">No Spam or Abuse</h4>
                    <p className="text-sm text-muted-foreground">
                      Dont send unsolicited messages or abuse the platform
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">No Unauthorized Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Dont attempt to access other users accounts or data
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium">No False Information</h4>
                    <p className="text-sm text-muted-foreground">
                      Dont provide false or misleading information
                    </p>
                  </div>
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
              <FileText className="mr-2 h-6 w-6 text-blue-600" />
              1. Acceptance of Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              By accessing and using Diploma Jobs (the Platform), you accept and agree to be bound by the 
              terms and provision of this agreement. If you do not agree to abide by the above, please do 
              not use this service.
            </p>
            <p className="text-muted-foreground">
              These Terms of Service (Terms) govern your use of our website located at diplomajobs.com 
              (the Service) operated by Diploma Jobs (us, we, or our).
            </p>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Changes will be effective immediately 
              upon posting. Your continued use of the platform after changes are posted constitutes acceptance 
              of the modified terms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="mr-2 h-6 w-6 text-green-600" />
              2. User Accounts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Account Creation</h4>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>You must provide accurate and complete information</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You must notify us immediately of any unauthorized access</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Account Responsibilities</h4>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>Keep your login credentials secure and confidential</li>
                <li>Update your information promptly when it changes</li>
                <li>Use your account only for legitimate job-seeking purposes</li>
                <li>Dont share your account with others</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Account Termination</h4>
              <p className="text-muted-foreground">
                You may terminate your account at any time. We may terminate or suspend your account 
                if you violate these terms or engage in prohibited activities.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>3. Privacy and Data Protection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and 
              protect your personal information. By using our platform, you agree to our Privacy Policy.
            </p>
            <div>
              <h4 className="font-semibold mb-2">Data Usage</h4>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>We collect only necessary information to provide our services</li>
                <li>We use your data to match you with relevant job opportunities</li>
                <li>We dont sell your personal information to third parties</li>
                <li>You can control your data through your account settings</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
