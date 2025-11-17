import { Field } from '@ark-ui/react/field';

export const Cell = () => {
  return (
    <Field.Root>
      <Field.Input
        className="w-8 h-8 border-2 rounded-md border-slate-500 text-center"
        maxLength={1}
      />
    </Field.Root>
  );
};
