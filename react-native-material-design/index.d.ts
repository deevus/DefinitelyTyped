import {ComponentClass, ReactNode} from "react";
import {ViewStyle, TextStyle} from "react-native";

declare module "react-native-material-design" {
    interface AvatarProps {
        /**
         * The `MaterialIcon` name
         */
        icon?: string;

        /**
         * A native `Image` component
         */
        image?: JSX.Element;

        /**
         * The width and height the avatar will be rendered at
         */
        size?: number;

        /**
         * The color of the icon
         */
        color?: string;

        /**
         * The color of the avatar
         */
        backgroundColor?: string;
    }
    export const Avatar: ComponentClass<AvatarProps>;

    type THEME_NAME = "light" | "dark";
    export const THEME_NAME: string[];

    type PRIMARY_COLORS = "googleBlue" | "googleGreen" | "googleGrey" | "googleRed" | "googleYellow" | "paperAmber" |
        "paperBlue" | "paperBlueGrey" | "paperBrown" | "paperCyan" | "paperDeepOrange" | "paperDeepPurple" | "paperGreen" |
        "paperGrey" | "paperIndigo" | "paperLightBlue" | "paperLightGreen" | "paperLime" | "paperOrange" | "paperPink" |
        "paperPurple" | "paperRed" | "paperTeal" | "paperYellow";
    export const PRIMARY_COLORS: string[];

    interface ButtonProps {
        /**
         * The text which is rendered inside of the button
         */
        text: string;

        theme?: THEME_NAME;

        primary?: PRIMARY_COLORS;

        /**
         * An object to override any colors
         */
        overrides?: {
            /**
             * Override the text color of the button
             */
            textColor?: string;

            /**
             * Override the background color of the button
             */
            backgroundColor?: string;

            /**
             * Override the ripple color of the button
             */
            rippleColor?: string;
        };

        /**
         * Whether to render the button as disabled. This will prevent any onPress props being triggered
         */
        disabled?: boolean;

        loading?: boolean;

        activityIndicatorColor?: string;

        styles?: {
            button?: ViewStyle;
            disabled?: ViewStyle;
            text?: TextStyle;
        };

        /**
         * A function which is called when the touch of the button is released
         */
        onPress?: Function;

        /**
         * A function which is called when the touch of the button is held for a long duration
         */
        onLongPress?: Function;

        /**
         * Whether to render the button as raised or flat
         */
        raised?: boolean;
    }
    export const Button: ComponentClass<ButtonProps>;

    interface CardProps {
        /**
         * The elevation the entire card is given (if not compatible, a border is supplied)
         */
        elevation?: number;

        /**
         * The React components rendered inside of the card
         */
        children?: ReactNode;

        theme?: THEME_NAME;

        overrides?: {
            backgroundColor?: string;
            rippleColor?: string;
        };

        disabled?: boolean;

        onPress?: Function;

        style?: ViewStyle;
    }
    interface CardMediaProps {
        image: JSX.Element;
        height?: number;
        overlay?: boolean;
        children?: ReactNode;
    }
    interface CardBodyProps {
        children?: ReactNode;
    }
    interface CardActionsProps {
        position?: "left" | "right"
        children?: ReactNode;
    }

    export const Card: ComponentClass<CardProps> & {
        Media: ComponentClass<CardMediaProps>;
        Body: ComponentClass<CardBodyProps>;
        Actions: ComponentClass<CardActionsProps>;
    };

    interface CheckboxItem {
        value: string | number;
        label?: string;
        disabled?: boolean;
    }
    interface CheckboxProps extends CheckboxItem {
        theme?: THEME_NAME;
        primary?: PRIMARY_COLORS;
        checked?: boolean;
        onCheck?: Function;
    }
    export const CheckBox: ComponentClass<CheckboxProps>;

    interface CheckboxGroupProps {
        theme?: THEME_NAME;
        primary?: PRIMARY_COLORS;
        onSelect?: Function;
        checked?: number[];
        items?: CheckboxItem[];
    }
    export const CheckboxGroup: ComponentClass<CheckboxGroupProps>;

    interface DrawerProps {
        theme?: THEME_NAME;
        primary?: PRIMARY_COLORS;
        overrides?: {
            backgroundColor?: string;
        }
        children?: ReactNode;
    }
    interface DrawerHeaderProps {
        image?: JSX.Element;
        backgroundColor?: string;
        height?: number;
        children?: ReactNode;
    }
    interface DrawerSectionProps {
        title?: string;
        items?: {
            icon?: string;
            value: string;
            label?: string;
            onPress?: Function;
            onLongPress?: Function;
            active?: boolean;
            disabled?: boolean;
        }[];
    }

    export const Drawer: ComponentClass<DrawerProps> & {
        Header: ComponentClass<DrawerHeaderProps>;
        Section: ComponentClass<DrawerSectionProps>;
    };

    interface DividerProps {
        inset?: boolean;
        theme?: THEME_NAME;
        style?: ViewStyle;
    }
    export const Divider: ComponentClass<DividerProps>;

    interface IconProps {
        name: string;
        style?: ViewStyle;
        size?: number;
        color?: string;
        allowFontScaling?: boolean;
    }
    export const Icon: ComponentClass<IconProps>;

    interface IconButtonProps {
        color: string;
        opacity?: number;
        disabled?: boolean;
        onPress?: Function;
        percent?: number;
        children?: ReactNode;
        badge?: {
            value?: number;
            animate?: boolean;
            backgroundColor?: string;
            textColor?: string;
        };
        onLayout?: Function;
    }
    export const IconButton: ComponentClass<IconButtonProps>;

    interface ListProps {
        primaryText: string;
        secondaryText?: string;
        captionText?: string;
        secondaryTextMoreLine: {
            text: string;
            style?: ViewStyle;
        }[];
        leftIcon?: JSX.Element;
        rightIcon?: JSX.Element;
        leftAvatar?: JSX.Element;
        rightAvatar?: JSX.Element;
        lines?: number;
        primaryColor?: string;
        onPress?: Function;
        onLeftIconClick?: Function;
        onRightIconClick?: Function;
    }
    export const List: ComponentClass<ListProps>;

    interface RadioButtonItem {
        value: string | number;
        label?: string;
        disabled?: boolean;
    }
    interface RadioButtonProps extends RadioButtonItem {
        theme?: THEME_NAME;
        primary?: PRIMARY_COLORS;
        checked?: boolean;
        onSelect?: Function;
    }
    export const RadioButton: ComponentClass<RadioButtonProps>;

    interface RadioButtonGroupProps {
        theme?: THEME_NAME;
        primary?: PRIMARY_COLORS;
        onSelect?: Function;
        selected?: string | number;
        items?: RadioButtonItem[];
    }
    export const RadioButtonGroup: ComponentClass<RadioButtonGroupProps>;

    interface RippleProps {
        color?: string;
        onPress?: Function;
        onLongPress?: Function;
        children?: ReactNode;
    }
    export const Ripple: ComponentClass<RippleProps>;

    interface SubheaderProps {
        text: string;
        color?: string;
        inset?: boolean;
        theme?: THEME_NAME;
        lines?: number;
    }
    export const Subheader: ComponentClass<SubheaderProps>;

    interface ToolbarProps {
        title?: string;
        theme?: THEME_NAME;
        primary?: PRIMARY_COLORS;
        style?: ViewStyle;
        leftIconStyle?: ViewStyle;
        rightIconStyle?: ViewStyle;
        elevation?: number;
        overrides?: {
            backgroundColor?: string;
            titleColor?: string;
            leftIconColor?: string;
            rightIconColor?: string;
        };
        icon?: string;
        onIconPress?: Function;
        actions?: {
            icon: string;
            onPress?: Function;
            counter?: any;
            onLayout?: Function;
        };
        onLayout?: Function;
    }
    export const Toolbar: ComponentClass<ToolbarProps>;

    interface Typo {
        paperFontCommonBase: TextStyle;
        paperFontCommonCode: TextStyle;
        paperFontCommonExpensiveKerning: TextStyle;
        paperFontCommonNowrap: TextStyle;
        paperFontDisplay4: TextStyle;
        paperFontDisplay3: TextStyle;
        paperFontDisplay2: TextStyle;
        paperFontDisplay1: TextStyle;
        paperFontHeadline: TextStyle;
        paperFontTitle: TextStyle;
        paperFontSubhead: TextStyle;
        paperFontBody1: TextStyle;
        paperFontBody2: TextStyle;
        paperFontCaption: TextStyle;
        paperFontMenu: TextStyle;
        paperFontButton: TextStyle;
        paperFontCode1: TextStyle;
        paperFontCode2: TextStyle;
    }
    export const TYPO: Typo;

    interface Color {
        googleRed100: TextStyle;
        googleRed300: TextStyle;
        googleRed500: TextStyle;
        googleRed700: TextStyle;
        googleBlue100: TextStyle;
        googleBlue300: TextStyle;
        googleBlue500: TextStyle;
        googleBlue700: TextStyle;
        googleGreen100: TextStyle;
        googleGreen300: TextStyle;
        googleGreen500: TextStyle;
        googleGreen700: TextStyle;
        googleYellow100: TextStyle;
        googleYellow300: TextStyle;
        googleYellow500: TextStyle;
        googleYellow700: TextStyle;
        googleGrey100: TextStyle;
        googleGrey300: TextStyle;
        googleGrey500: TextStyle;
        googleGrey700: TextStyle;
        paperRed50: TextStyle;
        paperRed100: TextStyle;
        paperRed200: TextStyle;
        paperRed300: TextStyle;
        paperRed400: TextStyle;
        paperRed500: TextStyle;
        paperRed600: TextStyle;
        paperRed700: TextStyle;
        paperRed800: TextStyle;
        paperRed900: TextStyle;
        paperRedA100: TextStyle;
        paperRedA200: TextStyle;
        paperRedA400: TextStyle;
        paperRedA700: TextStyle;
        paperPink50: TextStyle;
        paperPink100: TextStyle;
        paperPink200: TextStyle;
        paperPink300: TextStyle;
        paperPink400: TextStyle;
        paperPink500: TextStyle;
        paperPink600: TextStyle;
        paperPink700: TextStyle;
        paperPink800: TextStyle;
        paperPink900: TextStyle;
        paperPinkA100: TextStyle;
        paperPinkA200: TextStyle;
        paperPinkA400: TextStyle;
        paperPinkA700: TextStyle;
        paperPurple50: TextStyle;
        paperPurple100: TextStyle;
        paperPurple200: TextStyle;
        paperPurple300: TextStyle;
        paperPurple400: TextStyle;
        paperPurple500: TextStyle;
        paperPurple600: TextStyle;
        paperPurple700: TextStyle;
        paperPurple800: TextStyle;
        paperPurple900: TextStyle;
        paperPurpleA100: TextStyle;
        paperPurpleA200: TextStyle;
        paperPurpleA400: TextStyle;
        paperPurpleA700: TextStyle;
        paperDeepIndigo50: TextStyle;
        paperDeepIndigo100: TextStyle;
        paperDeepIndigo200: TextStyle;
        paperDeepIndigo300: TextStyle;
        paperDeepIndigo400: TextStyle;
        paperDeepIndigo500: TextStyle;
        paperDeepIndigo600: TextStyle;
        paperDeepIndigo700: TextStyle;
        paperDeepIndigo800: TextStyle;
        paperDeepIndigo900: TextStyle;
        paperDeepIndigoA100: TextStyle;
        paperDeepIndigoA200: TextStyle;
        paperDeepIndigoA400: TextStyle;
        paperDeepIndigoA700: TextStyle;
        paperIndigo50: TextStyle;
        paperIndigo100: TextStyle;
        paperIndigo200: TextStyle;
        paperIndigo300: TextStyle;
        paperIndigo400: TextStyle;
        paperIndigo500: TextStyle;
        paperIndigo600: TextStyle;
        paperIndigo700: TextStyle;
        paperIndigo800: TextStyle;
        paperIndigo900: TextStyle;
        paperIndigoA100: TextStyle;
        paperIndigoA200: TextStyle;
        paperIndigoA400: TextStyle;
        paperIndigoA700: TextStyle;
        paperBlue50: TextStyle;
        paperBlue100: TextStyle;
        paperBlue200: TextStyle;
        paperBlue300: TextStyle;
        paperBlue400: TextStyle;
        paperBlue500: TextStyle;
        paperBlue600: TextStyle;
        paperBlue700: TextStyle;
        paperBlue800: TextStyle;
        paperBlue900: TextStyle;
        paperBlueA100: TextStyle;
        paperBlueA200: TextStyle;
        paperBlueA400: TextStyle;
        paperBlueA700: TextStyle;
        paperLightBlue50: TextStyle;
        paperLightBlue100: TextStyle;
        paperLightBlue200: TextStyle;
        paperLightBlue300: TextStyle;
        paperLightBlue400: TextStyle;
        paperLightBlue500: TextStyle;
        paperLightBlue600: TextStyle;
        paperLightBlue700: TextStyle;
        paperLightBlue800: TextStyle;
        paperLightBlue900: TextStyle;
        paperLightBlueA100: TextStyle;
        paperLightBlueA200: TextStyle;
        paperLightBlueA400: TextStyle;
        paperLightBlueA700: TextStyle;
        paperCyan50: TextStyle;
        paperCyan100: TextStyle;
        paperCyan200: TextStyle;
        paperCyan300: TextStyle;
        paperCyan400: TextStyle;
        paperCyan500: TextStyle;
        paperCyan600: TextStyle;
        paperCyan700: TextStyle;
        paperCyan800: TextStyle;
        paperCyan900: TextStyle;
        paperCyanA100: TextStyle;
        paperCyanA200: TextStyle;
        paperCyanA400: TextStyle;
        paperCyanA700: TextStyle;
        paperTeal50: TextStyle;
        paperTeal100: TextStyle;
        paperTeal200: TextStyle;
        paperTeal300: TextStyle;
        paperTeal400: TextStyle;
        paperTeal500: TextStyle;
        paperTeal600: TextStyle;
        paperTeal700: TextStyle;
        paperTeal800: TextStyle;
        paperTeal900: TextStyle;
        paperTealA100: TextStyle;
        paperTealA200: TextStyle;
        paperTealA400: TextStyle;
        paperTealA700: TextStyle;
        paperGreen50: TextStyle;
        paperGreen100: TextStyle;
        paperGreen200: TextStyle;
        paperGreen300: TextStyle;
        paperGreen400: TextStyle;
        paperGreen500: TextStyle;
        paperGreen600: TextStyle;
        paperGreen700: TextStyle;
        paperGreen800: TextStyle;
        paperGreen900: TextStyle;
        paperGreenA100: TextStyle;
        paperGreenA200: TextStyle;
        paperGreenA400: TextStyle;
        paperGreenA700: TextStyle;
        paperLightGreen50: TextStyle;
        paperLightGreen100: TextStyle;
        paperLightGreen200: TextStyle;
        paperLightGreen300: TextStyle;
        paperLightGreen400: TextStyle;
        paperLightGreen500: TextStyle;
        paperLightGreen600: TextStyle;
        paperLightGreen700: TextStyle;
        paperLightGreen800: TextStyle;
        paperLightGreen900: TextStyle;
        paperLightGreenA100: TextStyle;
        paperLightGreenA200: TextStyle;
        paperLightGreenA400: TextStyle;
        paperLightGreenA700: TextStyle;
        paperLime50: TextStyle;
        paperLime100: TextStyle;
        paperLime200: TextStyle;
        paperLime300: TextStyle;
        paperLime400: TextStyle;
        paperLime500: TextStyle;
        paperLime600: TextStyle;
        paperLime700: TextStyle;
        paperLime800: TextStyle;
        paperLime900: TextStyle;
        paperLimeA100: TextStyle;
        paperLimeA200: TextStyle;
        paperLimeA400: TextStyle;
        paperLimeA700: TextStyle;
        paperYellow50: TextStyle;
        paperYellow100: TextStyle;
        paperYellow200: TextStyle;
        paperYellow300: TextStyle;
        paperYellow400: TextStyle;
        paperYellow500: TextStyle;
        paperYellow600: TextStyle;
        paperYellow700: TextStyle;
        paperYellow800: TextStyle;
        paperYellow900: TextStyle;
        paperYellowA100: TextStyle;
        paperYellowA200: TextStyle;
        paperYellowA400: TextStyle;
        paperYellowA700: TextStyle;
        paperAmber50: TextStyle;
        paperAmber100: TextStyle;
        paperAmber200: TextStyle;
        paperAmber300: TextStyle;
        paperAmber400: TextStyle;
        paperAmber500: TextStyle;
        paperAmber600: TextStyle;
        paperAmber700: TextStyle;
        paperAmber800: TextStyle;
        paperAmber900: TextStyle;
        paperAmberA100: TextStyle;
        paperAmberA200: TextStyle;
        paperAmberA400: TextStyle;
        paperAmberA700: TextStyle;
        paperOrange50: TextStyle;
        paperOrange100: TextStyle;
        paperOrange200: TextStyle;
        paperOrange300: TextStyle;
        paperOrange400: TextStyle;
        paperOrange500: TextStyle;
        paperOrange600: TextStyle;
        paperOrange700: TextStyle;
        paperOrange800: TextStyle;
        paperOrange900: TextStyle;
        paperOrangeA100: TextStyle;
        paperOrangeA200: TextStyle;
        paperOrangeA400: TextStyle;
        paperOrangeA700: TextStyle;
        paperDeepOrange50: TextStyle;
        paperDeepOrange100: TextStyle;
        paperDeepOrange200: TextStyle;
        paperDeepOrange300: TextStyle;
        paperDeepOrange400: TextStyle;
        paperDeepOrange500: TextStyle;
        paperDeepOrange600: TextStyle;
        paperDeepOrange700: TextStyle;
        paperDeepOrange800: TextStyle;
        paperDeepOrange900: TextStyle;
        paperDeepOrangeA100: TextStyle;
        paperDeepOrangeA200: TextStyle;
        paperDeepOrangeA400: TextStyle;
        paperDeepOrangeA700: TextStyle;
        paperBrown50: TextStyle;
        paperBrown100: TextStyle;
        paperBrown200: TextStyle;
        paperBrown300: TextStyle;
        paperBrown400: TextStyle;
        paperBrown500: TextStyle;
        paperBrown600: TextStyle;
        paperBrown700: TextStyle;
        paperBrown800: TextStyle;
        paperBrown900: TextStyle;
        paperGrey50: TextStyle;
        paperGrey100: TextStyle;
        paperGrey200: TextStyle;
        paperGrey300: TextStyle;
        paperGrey400: TextStyle;
        paperGrey500: TextStyle;
        paperGrey600: TextStyle;
        paperGrey700: TextStyle;
        paperGrey800: TextStyle;
        paperGrey900: TextStyle;
        paperBlueGrey50: TextStyle;
        paperBlueGrey100: TextStyle;
        paperBlueGrey200: TextStyle;
        paperBlueGrey300: TextStyle;
        paperBlueGrey400: TextStyle;
        paperBlueGrey500: TextStyle;
        paperBlueGrey600: TextStyle;
        paperBlueGrey700: TextStyle;
        paperBlueGrey800: TextStyle;
        paperBlueGrey900: TextStyle;
        darkDividerOpacity: TextStyle;
        darkDisabledOpacity: TextStyle;
        darkSecondaryOpacity: TextStyle;
        darkPrimaryOpacity: TextStyle;
        lightDividerOpacity: TextStyle;
        lightDisabledOpacity: TextStyle;
        lightSecondaryOpacity: TextStyle;
        lightPrimaryOpacity: TextStyle;
    }
    export const COLOR: Color;
}
