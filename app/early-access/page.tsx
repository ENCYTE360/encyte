import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function EarlyAccess() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 py-16 container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get Early Access to Encytex</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our exclusive early access program and be the first to experience the future of health and performance
            optimization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Early Access Benefits</h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <span className="font-medium">Priority Access</span>
                  <p className="text-muted-foreground text-sm mt-1">Be among the first to use our platform</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <span className="font-medium">Exclusive Features</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Test new features before they're publicly available
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <span className="font-medium">Founder's Pricing</span>
                  <p className="text-muted-foreground text-sm mt-1">Special pricing for early adopters</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <span className="font-medium">Direct Support</span>
                  <p className="text-muted-foreground text-sm mt-1">
                    Direct access to our team for feedback and support
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <Card className="w-full max-w-md mx-auto bg-encytex-card-bg border-none">
            <CardHeader>
              <CardTitle>Get Early Access</CardTitle>
              <CardDescription>
                Join our exclusive early access program and be the first to experience Encytex.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="bg-background/50" />
                </div>
                <Button type="submit" className="w-full early-access-btn">
                  Request Early Access
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}

