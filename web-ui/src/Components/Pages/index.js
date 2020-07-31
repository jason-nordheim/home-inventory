import HomePage from './HomePage'
import ItemsPage from './ItemsPage' 
import LocationsPage from './LocationsPage'
import VendorsPage from './VendorsPage'

export const pages = [
    {
        name: 'home', 
        display: "Home", 
        path: '/', 
        description: 'displays overview of logged-in user, or redirects to login screen if not logged in', 
        component: HomePage, 
        active: true, 
    }, 
    {
        name: 'items', 
        display: "Items", 
        path: '/items', 
        description: "displays all of the current user items", 
        component: ItemsPage, 
        active: false, 
    }, 
    {
        name: 'locations', 
        display: 'Locations', 
        path: '/locations', 
        component: LocationsPage, 
        description: 'displays all of the locations associated with the current user', 
        active: false, 
    }, 
    {
        name: 'vendors', 
        display: 'Vendors', 
        path: '/vendors', 
        component: VendorsPage, 
        description: 'displays all of the vendors created by the current user', 
        active: false 
    } 
]

export default pages; 