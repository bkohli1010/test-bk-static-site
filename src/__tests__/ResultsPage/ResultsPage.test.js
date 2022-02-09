import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import Search from "../../Components/core/Search/Search";
import { BrowserRouter } from 'react-router-dom';
import ResultsPage from "../../Components/core/ResultsPage/ResultsPage";

let mockRetrieveVehicleResponse = [
    {
        "vin": "VIN001",
        "city": "Canton",
        "carModel": "F150",
        "carMake": "Ford",
        "carUrl": "www.ford.com"
    },
    {
        "vin": "VIN002",
        "city": "Dearborn",
        "carModel": "FIESTA",
        "carMake": "Ford",
        "carUrl": "www.ford.com"
    },
    {
        "vin": "VIN003",
        "city": "NY",
        "carModel": "Navigator",
        "carMake": "Lincoln",
        "carUrl": "www.ford.com"
    },
    {
        "vin": "VIN004",
        "city": "Troy",
        "carModel": "Nautilus",
        "carMake": "Lincoln",
        "carUrl": "www.ford.com"
    },
    {
        "vin": "VIN005",
        "city": "Detroit",
        "carModel": "Mustang",
        "carMake": "Ford",
        "carUrl": "www.ford.com/suvs/mach-e"
    },
    {
        "vin": "VIN006",
        "city": "Detroit",
        "carModel": "Taurus",
        "carMake": "Ford",
        "carUrl": "www.ford.com"
    }
];

const setup = () => {
    const utils = render(<BrowserRouter><ResultsPage /></BrowserRouter>)
    const input = utils.getByPlaceholderText('Search')
    return {
        input,
        ...utils,
    }
}

describe('when the results page component is rendered', () => {
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockRetrieveVehicleResponse)
        })
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('then I make a fetch call to external api to retrieve vehicles', async () => {
        expect(mockRetrieveVehicleResponse).toHaveLength(6);
    });

    test('then I enter search criteria as Ford then I will see 4 search results', async () => {
        const {input} = setup()
        fireEvent.click(input);
        fireEvent.change(input, {target: {value: 'Ford'}})
        await waitFor(() => input)
        let makeLength = await waitFor(() => screen.getAllByTestId('make-model'))
        expect(makeLength).toHaveLength(4);
    })
    test('then I enter search criteria as Lincoln then I can see 2 search results', async () => {
        const {input} = setup()
        fireEvent.click(input);
        fireEvent.change(input, {target: {value: 'Lincoln'}})
        await waitFor(() => input)
        let makeLength = await waitFor(() => screen.getAllByTestId('make-model'))
        expect(makeLength).toHaveLength(2);
    })
    test('then I enter search criteria as F150 then I can see 1 search results', async () => {
        const {input} = setup()
        fireEvent.click(input);
        fireEvent.change(input, {target: {value: 'F150'}})
        await waitFor(() => input)
        let makeLength = await waitFor(() => screen.getAllByTestId('make-model'))
        expect(makeLength).toHaveLength(1);
    })
    test('then I enter search criteria as 150 then I can see 1 search result', async () => {
        const {input} = setup()
        fireEvent.click(input);
        fireEvent.change(input, {target: {value: '1'}})
        await waitFor(() => input)
        let makeLength = await waitFor(() => screen.getAllByTestId('make-model'))
        expect(makeLength).toHaveLength(1);
    })
    test('then I enter search criteria as F then I can see 4 search results', async () => {
        const {input} = setup()
        fireEvent.click(input);
        fireEvent.change(input, {target: {value: 'F'}})
        await waitFor(() => input)
        let makeLength = await waitFor(() => screen.getAllByTestId('make-model'))
        expect(makeLength).toHaveLength(4);
    })
});

