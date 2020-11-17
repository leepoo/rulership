import React from 'react';
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

const Button: React.FC<BaseButtonProps> = (props) => {
    const {
        className,
        disabled,
        size,
        btnType,
        children,
        href
    } = props
    const classs = classNames('btn', {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link) && disabled
    })
    if(btnType === ButtonType.Link && href) {
        return (
            <a className={classs} href='www.baidu.com'>{children}</a>
        )
    }else {
       return (<button className={classs} disabled={disabled}>{children}</button>)
    }
}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}

export default Button