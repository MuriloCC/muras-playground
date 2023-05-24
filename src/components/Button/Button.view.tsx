import { IButtonProps, Button as NativeBaseButton, Text } from "native-base";
import { ColorType } from "native-base/lib/typescript/components/types";

type Props = IButtonProps & {
  title: string;
  titleColor: ColorType;
};

export function Button({ title, titleColor, ...rest }: Props) {
  return (
    <NativeBaseButton fontSize="md" h={12} mb={4} {...rest}>
      <Text color={titleColor} fontSize="md" fontWeight="bold">
        {title}
      </Text>
    </NativeBaseButton>
  );
}
