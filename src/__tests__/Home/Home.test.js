import { render, screen } from '@testing-library/react';
import Home from '../../Components/core/Home/Home'
import { BrowserRouter } from 'react-router-dom';

describe('when I start the application and land on the homepage', () => {
    test('then I can see the Search bar', () => {
        const { container } = render(<BrowserRouter><Home /></BrowserRouter>);
        expect(container.getElementsByClassName('search-bar').length).toBe(1);
    });
    test('then I can see the Locate Dealer link', () => {
        render(<BrowserRouter><Home /></BrowserRouter>);
        let link = screen.getAllByText('Locate Dealer')[0];
        console.log('link: ', link.href)
        expect(link.href).toContain('https://www.fleet.ford.com/dealerships/?gnav=header-finddealer#/q/48067/radius/50/filters/all=EVCertified,QuickLane');
    });
    test('then I can see the Locate Charging Location link', () => {
        render(<BrowserRouter><Home /></BrowserRouter>);
        let link = screen.getAllByText('Locate Charging Location')[0];
        console.log('link: ', link.href)
        expect(link.href).toContain('https://www.ford.com/buy-site-wide-content/overlays/try-the-tech/');
    });
    test('then I can see the Locate & Search Sharepoint link', () => {
        render(<BrowserRouter><Home /></BrowserRouter>);
        let link = screen.getAllByText('Locate & Search Sharepoint')[0];
        console.log('link: ', link.href)
        expect(link.href).toContain('https://azureford.sharepoint.com/sites/FordProTech/');
    });
})

