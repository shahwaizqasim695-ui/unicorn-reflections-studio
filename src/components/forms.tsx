import { useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  message: z.string().trim().min(10, "Please share a little more.").max(1500),
});

const orderSchema = contactSchema.extend({
  address: z.string().trim().min(8, "Please enter a complete mailing address.").max(300),
  quantity: z.coerce.number().int().min(1).max(10),
});

type FormErrors = Record<string, string>;

function FieldError({ message }: { message: string | undefined }) {
  return message ? <p className="mt-1 text-xs text-destructive">{message}</p> : null;
}

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((issue) => [String(issue.path[0]), issue.message])));
      return;
    }
    setErrors({});
    setSent(true);
  }

  if (sent) return <Success title="Message prepared" text="Thank you for writing. This preview form is ready to connect to an email service before launch." />;

  return (
    <form onSubmit={submit} noValidate className="space-y-6">
      <Field name="name" label="Your name" error={errors["name"]} />
      <Field name="email" label="Email address" type="email" error={errors["email"]} />
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={7} maxLength={1500} className="mt-2 min-h-40 bg-pearl" placeholder="What would you like to share?" />
        <FieldError message={errors["message"]} />
      </div>
      <Button type="submit" variant="gold" size="lg"><Send /> Send message</Button>
    </form>
  );
}

export function OrderForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget));
    const parsed = orderSchema.safeParse(values);
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((issue) => [String(issue.path[0]), issue.message])));
      return;
    }
    setErrors({});
    setSent(true);
  }

  if (sent) return <Success title="Order request received" text="Thank you. This preview is ready for final pricing, fulfillment, and payment details before launch." />;

  return (
    <form onSubmit={submit} noValidate className="grid gap-6 md:grid-cols-2">
      <Field name="name" label="Full name" error={errors["name"]} />
      <Field name="email" label="Email address" type="email" error={errors["email"]} />
      <div className="md:col-span-2">
        <Label htmlFor="address">Mailing address</Label>
        <Textarea id="address" name="address" rows={4} maxLength={300} className="mt-2 bg-pearl" placeholder="Street, city, state, postal code, country" />
        <FieldError message={errors["address"]} />
      </div>
      <Field name="quantity" label="Quantity" type="number" defaultValue="1" min="1" max="10" error={errors["quantity"]} />
      <div className="md:col-span-2">
        <Label htmlFor="message">Note for Rich <span className="text-muted-foreground">(optional)</span></Label>
        <Textarea id="message" name="message" rows={5} maxLength={1500} className="mt-2 bg-pearl" placeholder="Gift inscription or delivery note" defaultValue="No additional message." />
        <FieldError message={errors["message"]} />
      </div>
      <div className="md:col-span-2">
        <Button type="submit" variant="gold" size="lg"><Send /> Request your copy</Button>
      </div>
    </form>
  );
}

function Field({ name, label, error, ...props }: React.ComponentProps<typeof Input> & { name: string; label: string; error: string | undefined }) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} required maxLength={255} className="mt-2 h-12 bg-pearl" {...props} />
      <FieldError message={error} />
    </div>
  );
}

function Success({ title, text }: { title: string; text: string }) {
  return (
    <div className="border border-gold/30 bg-cream p-8 text-center">
      <span className="mx-auto grid size-12 place-items-center rounded-full bg-gold text-navy"><Check /></span>
      <h2 className="mt-5 font-display text-3xl text-navy">{title}</h2>
      <p className="mx-auto mt-3 max-w-md leading-7 text-muted-foreground">{text}</p>
    </div>
  );
}