'use client'
import React from 'react'
export default function GoBackLink(props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) {
    return <a onClick={(e) => {
        e.preventDefault();
        history.back();
    }} {...props} />;
}
