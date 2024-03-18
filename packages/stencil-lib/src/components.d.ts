/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { FooterContent } from "./components/inno-footer/inno-footer.model";
import { ExpandedChangedEvent } from "./components/inno-pane/inno-pane";
import { Placement } from "@floating-ui/dom";
export { FooterContent } from "./components/inno-footer/inno-footer.model";
export { ExpandedChangedEvent } from "./components/inno-pane/inno-pane";
export { Placement } from "@floating-ui/dom";
export namespace Components {
    interface InnoAccordion {
        "collapsed": boolean;
        "icon": string;
        "label": string;
        "variant": 'light' | 'dark';
    }
    interface InnoBreadcrumb {
    }
    interface InnoBreadcrumbItem {
        /**
          * Icon to be displayed next ot the label
         */
        "icon": string;
        "iconSize": number;
        /**
          * Breadcrumb label
         */
        "label": string;
        "orderId"?: number;
        "showChevron": boolean;
        "visible": boolean;
    }
    interface InnoButton {
        "disabled": boolean;
        "icon": string;
        "iconOnly": boolean;
        "iconPosition": 'left' | 'right';
        "navDirection": 'left' | 'right';
        "parentBackgroundColor": 'light' | 'dark';
        "tabIdx": number;
        "type": 'button' | 'submit';
        "variant": 'primary' | 'secondary' | 'tertiary' | 'media' | 'navigation';
    }
    /**
     * Represents the general footer for the Innomotics applications.
     */
    interface InnoFooter {
        /**
          * The copyright label.
         */
        "copyright": string;
        /**
          * Generalized entries for the application.
         */
        "entries": ReadonlyArray<FooterContent>;
        /**
          * Theme variant property.
         */
        "variant": 'light' | 'dark';
    }
    interface InnoIcon {
        /**
          * The icon name
         */
        "icon": string;
        "size": number;
        "theme": 'light' | 'dark';
    }
    interface InnoInput {
        "disabled": boolean;
        "isActive": boolean;
        "isFocused": boolean;
        "label": string;
        "name": string;
        "value": string;
        "variant": string;
    }
    interface InnoPane {
        "closeOnBackdropClick": boolean;
        "expanded": boolean;
        "hideCloseButton": boolean;
        "paneSize": string;
        "position": 'top' | 'left' | 'bottom' | 'right';
        "titleText": string;
    }
    interface InnoPopover {
        "animationFrame": boolean;
        "for": string;
        "hideTooltip": () => Promise<void>;
        "placement": Placement;
        "showTooltip": () => Promise<void>;
        "titleContent": string;
        "trigger": 'hover' | 'click' | 'manual';
        "visible": boolean;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
export interface InnoBreadcrumbCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInnoBreadcrumbElement;
}
export interface InnoBreadcrumbItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInnoBreadcrumbItemElement;
}
export interface InnoFooterCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInnoFooterElement;
}
export interface InnoPaneCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInnoPaneElement;
}
declare global {
    interface HTMLInnoAccordionElement extends Components.InnoAccordion, HTMLStencilElement {
    }
    var HTMLInnoAccordionElement: {
        prototype: HTMLInnoAccordionElement;
        new (): HTMLInnoAccordionElement;
    };
    interface HTMLInnoBreadcrumbElementEventMap {
        "itemClick": string;
    }
    interface HTMLInnoBreadcrumbElement extends Components.InnoBreadcrumb, HTMLStencilElement {
        addEventListener<K extends keyof HTMLInnoBreadcrumbElementEventMap>(type: K, listener: (this: HTMLInnoBreadcrumbElement, ev: InnoBreadcrumbCustomEvent<HTMLInnoBreadcrumbElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLInnoBreadcrumbElementEventMap>(type: K, listener: (this: HTMLInnoBreadcrumbElement, ev: InnoBreadcrumbCustomEvent<HTMLInnoBreadcrumbElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLInnoBreadcrumbElement: {
        prototype: HTMLInnoBreadcrumbElement;
        new (): HTMLInnoBreadcrumbElement;
    };
    interface HTMLInnoBreadcrumbItemElementEventMap {
        "breadcrumbItemClick": number;
    }
    interface HTMLInnoBreadcrumbItemElement extends Components.InnoBreadcrumbItem, HTMLStencilElement {
        addEventListener<K extends keyof HTMLInnoBreadcrumbItemElementEventMap>(type: K, listener: (this: HTMLInnoBreadcrumbItemElement, ev: InnoBreadcrumbItemCustomEvent<HTMLInnoBreadcrumbItemElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLInnoBreadcrumbItemElementEventMap>(type: K, listener: (this: HTMLInnoBreadcrumbItemElement, ev: InnoBreadcrumbItemCustomEvent<HTMLInnoBreadcrumbItemElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLInnoBreadcrumbItemElement: {
        prototype: HTMLInnoBreadcrumbItemElement;
        new (): HTMLInnoBreadcrumbItemElement;
    };
    interface HTMLInnoButtonElement extends Components.InnoButton, HTMLStencilElement {
    }
    var HTMLInnoButtonElement: {
        prototype: HTMLInnoButtonElement;
        new (): HTMLInnoButtonElement;
    };
    interface HTMLInnoFooterElementEventMap {
        "contentSelected": string;
    }
    /**
     * Represents the general footer for the Innomotics applications.
     */
    interface HTMLInnoFooterElement extends Components.InnoFooter, HTMLStencilElement {
        addEventListener<K extends keyof HTMLInnoFooterElementEventMap>(type: K, listener: (this: HTMLInnoFooterElement, ev: InnoFooterCustomEvent<HTMLInnoFooterElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLInnoFooterElementEventMap>(type: K, listener: (this: HTMLInnoFooterElement, ev: InnoFooterCustomEvent<HTMLInnoFooterElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLInnoFooterElement: {
        prototype: HTMLInnoFooterElement;
        new (): HTMLInnoFooterElement;
    };
    interface HTMLInnoIconElement extends Components.InnoIcon, HTMLStencilElement {
    }
    var HTMLInnoIconElement: {
        prototype: HTMLInnoIconElement;
        new (): HTMLInnoIconElement;
    };
    interface HTMLInnoInputElement extends Components.InnoInput, HTMLStencilElement {
    }
    var HTMLInnoInputElement: {
        prototype: HTMLInnoInputElement;
        new (): HTMLInnoInputElement;
    };
    interface HTMLInnoPaneElementEventMap {
        "expandedChanged": ExpandedChangedEvent;
    }
    interface HTMLInnoPaneElement extends Components.InnoPane, HTMLStencilElement {
        addEventListener<K extends keyof HTMLInnoPaneElementEventMap>(type: K, listener: (this: HTMLInnoPaneElement, ev: InnoPaneCustomEvent<HTMLInnoPaneElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLInnoPaneElementEventMap>(type: K, listener: (this: HTMLInnoPaneElement, ev: InnoPaneCustomEvent<HTMLInnoPaneElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLInnoPaneElement: {
        prototype: HTMLInnoPaneElement;
        new (): HTMLInnoPaneElement;
    };
    interface HTMLInnoPopoverElement extends Components.InnoPopover, HTMLStencilElement {
    }
    var HTMLInnoPopoverElement: {
        prototype: HTMLInnoPopoverElement;
        new (): HTMLInnoPopoverElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "inno-accordion": HTMLInnoAccordionElement;
        "inno-breadcrumb": HTMLInnoBreadcrumbElement;
        "inno-breadcrumb-item": HTMLInnoBreadcrumbItemElement;
        "inno-button": HTMLInnoButtonElement;
        "inno-footer": HTMLInnoFooterElement;
        "inno-icon": HTMLInnoIconElement;
        "inno-input": HTMLInnoInputElement;
        "inno-pane": HTMLInnoPaneElement;
        "inno-popover": HTMLInnoPopoverElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface InnoAccordion {
        "collapsed"?: boolean;
        "icon"?: string;
        "label"?: string;
        "variant"?: 'light' | 'dark';
    }
    interface InnoBreadcrumb {
        /**
          * Crumb item clicked event
         */
        "onItemClick"?: (event: InnoBreadcrumbCustomEvent<string>) => void;
    }
    interface InnoBreadcrumbItem {
        /**
          * Icon to be displayed next ot the label
         */
        "icon"?: string;
        "iconSize"?: number;
        /**
          * Breadcrumb label
         */
        "label"?: string;
        "onBreadcrumbItemClick"?: (event: InnoBreadcrumbItemCustomEvent<number>) => void;
        "orderId"?: number;
        "showChevron"?: boolean;
        "visible"?: boolean;
    }
    interface InnoButton {
        "disabled"?: boolean;
        "icon"?: string;
        "iconOnly"?: boolean;
        "iconPosition"?: 'left' | 'right';
        "navDirection"?: 'left' | 'right';
        "parentBackgroundColor"?: 'light' | 'dark';
        "tabIdx"?: number;
        "type"?: 'button' | 'submit';
        "variant"?: 'primary' | 'secondary' | 'tertiary' | 'media' | 'navigation';
    }
    /**
     * Represents the general footer for the Innomotics applications.
     */
    interface InnoFooter {
        /**
          * The copyright label.
         */
        "copyright"?: string;
        /**
          * Generalized entries for the application.
         */
        "entries"?: ReadonlyArray<FooterContent>;
        "onContentSelected"?: (event: InnoFooterCustomEvent<string>) => void;
        /**
          * Theme variant property.
         */
        "variant"?: 'light' | 'dark';
    }
    interface InnoIcon {
        /**
          * The icon name
         */
        "icon"?: string;
        "size"?: number;
        "theme"?: 'light' | 'dark';
    }
    interface InnoInput {
        "disabled"?: boolean;
        "isActive"?: boolean;
        "isFocused"?: boolean;
        "label"?: string;
        "name"?: string;
        "value"?: string;
        "variant"?: string;
    }
    interface InnoPane {
        "closeOnBackdropClick"?: boolean;
        "expanded"?: boolean;
        "hideCloseButton"?: boolean;
        "onExpandedChanged"?: (event: InnoPaneCustomEvent<ExpandedChangedEvent>) => void;
        "paneSize"?: string;
        "position"?: 'top' | 'left' | 'bottom' | 'right';
        "titleText"?: string;
    }
    interface InnoPopover {
        "animationFrame"?: boolean;
        "for"?: string;
        "placement"?: Placement;
        "titleContent"?: string;
        "trigger"?: 'hover' | 'click' | 'manual';
        "visible"?: boolean;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "inno-accordion": InnoAccordion;
        "inno-breadcrumb": InnoBreadcrumb;
        "inno-breadcrumb-item": InnoBreadcrumbItem;
        "inno-button": InnoButton;
        "inno-footer": InnoFooter;
        "inno-icon": InnoIcon;
        "inno-input": InnoInput;
        "inno-pane": InnoPane;
        "inno-popover": InnoPopover;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "inno-accordion": LocalJSX.InnoAccordion & JSXBase.HTMLAttributes<HTMLInnoAccordionElement>;
            "inno-breadcrumb": LocalJSX.InnoBreadcrumb & JSXBase.HTMLAttributes<HTMLInnoBreadcrumbElement>;
            "inno-breadcrumb-item": LocalJSX.InnoBreadcrumbItem & JSXBase.HTMLAttributes<HTMLInnoBreadcrumbItemElement>;
            "inno-button": LocalJSX.InnoButton & JSXBase.HTMLAttributes<HTMLInnoButtonElement>;
            /**
             * Represents the general footer for the Innomotics applications.
             */
            "inno-footer": LocalJSX.InnoFooter & JSXBase.HTMLAttributes<HTMLInnoFooterElement>;
            "inno-icon": LocalJSX.InnoIcon & JSXBase.HTMLAttributes<HTMLInnoIconElement>;
            "inno-input": LocalJSX.InnoInput & JSXBase.HTMLAttributes<HTMLInnoInputElement>;
            "inno-pane": LocalJSX.InnoPane & JSXBase.HTMLAttributes<HTMLInnoPaneElement>;
            "inno-popover": LocalJSX.InnoPopover & JSXBase.HTMLAttributes<HTMLInnoPopoverElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
