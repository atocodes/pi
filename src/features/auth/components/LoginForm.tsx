import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Badge } from "@/components/ui/badge";
import { LoginFormValues, loginSchema } from "../schema/user.schema";
import { useLogin } from "../hooks/login.hook";



export  function LoginForm() {
  const { error, handleLogin, loading, user } = useLogin();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    handleLogin(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        <FieldSet>
          <FieldGroup className="flex items-center">
            <FieldLegend>Login</FieldLegend>
            <FieldDescription>Login To Your Store</FieldDescription>
          </FieldGroup>
          <FieldSeparator />
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="username">UserName</FieldLabel>
              <Input
                id="username"
                placeholder="Username"
                required
                {...form.register("username")}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password" aria-required>
                Password
              </FieldLabel>
              <Input
                id="password"
                placeholder="Password"
                {...form.register("password")}
              />
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        {error ? <Badge>{error}</Badge> : ""}
        <Field orientation="horizontal">
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting || loading ? "Logging in" : "Login"}
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
