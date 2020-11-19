import React, { ButtonHTMLAttributes, AnchorHTMLAttributes} from 'react';
import classNames from 'classnames';
// 枚举
export enum ButtonSize {
    large = 'lg',
    small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: React.ReactNode;
    href?: string;
}

// 类型别名
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

// Partial 设置成都是可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        disabled,
        size,
        btnType,
        children,
        href,
        ...restProps
    } = props
    const classs = classNames('btn', className,{
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })
    if(btnType === ButtonType.Link && href) {
        return (
            <a className={classs} href='www.baidu.com' {...restProps}>{children}</a>
        )
    }else {
       return (<button className={classs} disabled={disabled} {...restProps}>{children}</button>)
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button