"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { resultsSchema } from "@/lib/validators";
import { z } from "zod";

type FormValues = z.infer<typeof resultsSchema>;

export function ResultsForm() {
  const [pending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(resultsSchema),
  });

  const onSubmit = (data: FormValues) => {
    startTransition(async () => {
      await new Promise((resolve) => setTimeout(resolve, 600));
      console.log("redirecting to external panel", data);
      reset();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="documento">CPF/CNPJ</Label>
        <Input
          id="documento"
          placeholder="Digite seu documento"
          {...register("document")}
        />
        {errors.document && (
          <p className="text-sm text-destructive">{errors.document.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="protocolo">Protocolo</Label>
        <Input
          id="protocolo"
          placeholder="Ex: JM-2024-4458"
          {...register("protocol")}
        />
        {errors.protocol && (
          <p className="text-sm text-destructive">{errors.protocol.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full" disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Validando acesso
          </>
        ) : (
          "Consultar resultados"
        )}
      </Button>
      <p className="text-xs text-muted-foreground">
        Ao enviar, você será direcionado para o painel externo de resultados
        com autenticação de dois fatores.
      </p>
    </form>
  );
}
