import { ExtractPropTypes, PropType } from "vue";

export const iconProps = {
  color: String as PropType<string>,
  size: [Number, String] as PropType<number | string>,
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
