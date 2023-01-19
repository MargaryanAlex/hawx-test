import React from "react";
import {Components} from "src/pages";
import crm from "src/assets/img/solutions/crm.png";
import design from "src/assets/img/solutions/design.png";
import financial from "src/assets/img/solutions/financial.png";
import froud from "src/assets/img/solutions/fraud.png";
import product from "src/assets/img/solutions/product.png";
import sportsbook from "src/assets/img/solutions/sportsbook.png";
import web from "src/assets/img/solutions/website.png";
import booster from "src/assets/img/booster.svg";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
    title?: string;
    isNavLink?: boolean;
}

export interface IMenu {
    title: string;
    icon?: string;
    path?: string;
    color?: string;
    subList?: IMenu[];
}

export enum RouteNames {
    HOME = "/",
    COMPANY = "/About_Us",
    NEWS = "/News",
    CONTACT = "/Contact",
    CLIENTS = "/Clients",
    CRM = "/CRM_Services",
    DESIGN = "/Design_Services",
    WEBSITE = "/Website_Management",
    SPORTSBOOK = "/Sportsbook_Risk_Management",
    FRAUD = "/Fraud_Management",
    PRODUCT = "/Product_Management",
    FINANCIAL = "/Financial_Management",
    PRIVACY = "/Privacy_Policy",
    COOKIES = "/Cookies_Policy",
    TERMS = "/Terms_and_Conditions",
    BOOSTER = "/booster"
}

export const pagesRouteList: IRoute[] = [
    {path: RouteNames.HOME, component: Components.Home, exact: true},
    {path: RouteNames.COMPANY, component: Components.AboutUs, exact: true},
    {path: RouteNames.NEWS, component: Components.News, exact: true},
    {path: RouteNames.CONTACT, component: Components.Contacts, exact: true},
    {path: RouteNames.CLIENTS, component: Components.Clients, exact: true},
    {path: RouteNames.PRIVACY, component: Components.Privacy, exact: true},
    {path: RouteNames.COOKIES, component: Components.Cookies, exact: true},
    {path: RouteNames.TERMS, component: Components.Terms, exact: true},
];
export const boosterRouteList: IRoute[] = [
    {path: RouteNames.BOOSTER, component: Components.Booster, exact: true},
]
export const solutionsRouteList: IRoute[] = [
    {path: RouteNames.CRM, component: Components.Crm, exact: true},
    {path: RouteNames.DESIGN, component: Components.Design, exact: true},
    {path: RouteNames.WEBSITE, component: Components.Website, exact: true},
    {
        path: RouteNames.SPORTSBOOK,
        component: Components.Sportsbook,
        exact: true,
    },
    {path: RouteNames.FRAUD, component: Components.Fraud, exact: true},
    {path: RouteNames.PRODUCT, component: Components.Product, exact: true},
    {path: RouteNames.FINANCIAL, component: Components.Financial, exact: true},
];
export const solutionsList: IMenu[] = [
    {
        title: "CRM-text",
        path: RouteNames.CRM,
        color: "#0148FF",
        icon: crm,
    },
    {
        title: "DESIGN-text",
        path: RouteNames.DESIGN,
        color: "#EC80EC",
        icon: design,
    },
    {
        title: "WEBSITE-text",
        path: RouteNames.WEBSITE,
        color: "#FFCD3A",
        icon: web,
    },
    {
        title: "SPORTSBOOK-text",
        path: RouteNames.SPORTSBOOK,
        color: "#964ECF",
        icon: sportsbook,
    },
    {
        title: "FRAUD-text",
        path: RouteNames.FRAUD,
        color: "#E95642",
        icon: froud,
    },
    {
        title: "PRODUCT-text",
        path: RouteNames.PRODUCT,
        color: "#D7D8E1",
        icon: product,
    },
    {
        title: "FINANCIAL-text",
        path: RouteNames.FINANCIAL,
        color: "#00836D",
        icon: financial,
    },
];

export const companyList: IMenu[] = [
    {
        title: "ABOUT-text",
        path: RouteNames.COMPANY,
    },
    {
        title: "News-text",
        path: RouteNames.NEWS,
    },
    {
        title: "Clients-text",
        path: RouteNames.CLIENTS,
    },
    {
        title: "Contact-text",
        path: RouteNames.CONTACT,
    },
];

export const legalList: IMenu[] = [
    {
        title: "PRIVACY-text",
        path: RouteNames.PRIVACY,
    },
    {
        title: "COOKIES-text",
        path: RouteNames.COOKIES,
    },
    {
        title: "TERMS-text",
        path: RouteNames.TERMS,
    },
];

export const navList: IMenu[] = [
    {
        title: "Booster-text",
        path: RouteNames.BOOSTER,
        icon: booster,
    },
    {
        title: "Solutions-text",
        subList: solutionsList,
    },
    {
        title: "Clients-text",
        path: RouteNames.CLIENTS,
    },
    {
        title: "Company-text",
        path: RouteNames.COMPANY,
    },
    {
        title: "News-text",
        path: RouteNames.NEWS,
    },
    {
        title: "Contact-text",
        path: RouteNames.CONTACT,
    },
];
