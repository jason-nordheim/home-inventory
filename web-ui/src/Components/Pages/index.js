import React from 'react' 
import HomePage from './HomePage'
import ItemsPage from './ItemsPage' 
import LocationsPage from './LocationsPage'
import VendorsPage from './VendorsPage'
import AccountDetails from '../AccountDetails'

export const pages = [
    {
        key: 0, 
        name: 'home', 
        display: "Home", 
        exact: true, 
        path: '/', 
        description: 'displays overview of logged-in user, or redirects to login screen if not logged in', 
        component: HomePage, 
        nav: true, 
    }, 
    {
        key: 1, 
        name: 'items', 
        display: "Items", 
        path: '/items', 
        exact: false, 
        description: "displays all of the current user items", 
        component: ItemsPage, 
        nav: true,  
    }, 
    {
        key: 2, 
        name: 'locations', 
        display: 'Locations', 
        path: '/locations', 
        exact: false, 
        component: LocationsPage, 
        description: 'displays all of the locations associated with the current user', 
        nav: true, 
    }, 
    {
        key: 3, 
        name: 'vendors', 
        display: 'Vendors', 
        path: '/vendors', 
        exact: false, 
        component: VendorsPage, 
        description: 'displays all of the vendors created by the current user', 
        nav: true
    }, 
    {
        key: 4, 
        name: 'account', 
        display: 'Account Information', 
        path: '/account', 
        exact: false, 
        component: AccountDetails, 
        description: 'displays information regarding the details of the currently logged in user', 
        nav: false, 
    }
]

export default pages; 