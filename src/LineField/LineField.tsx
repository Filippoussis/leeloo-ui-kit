import { Field } from '@ark-ui/react/field';

export const LineField = () => {
  return (
    <Field.Root>
      <Field.Input
        className="w-auto h-8 border-b-2 border-slate-500 text-center"
        maxLength={6}
      />
    </Field.Root>
  );
};
