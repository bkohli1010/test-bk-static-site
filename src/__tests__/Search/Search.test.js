import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import Search from "../../Components/core/Search/Search";
import {BrowserRouter} from 'react-router-dom';

const setup = () => {
    const utils = render(<BrowserRouter><Search/></BrowserRouter>)
    const input = utils.getByPlaceholderText('Search')
    return {
        input,
        ...utils,
    }
}

describe('when the search component is rendered', () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('and I can type the search criteria as Ford, then the input value will be Ford', async () => {
        const {input} = setup()
        fireEvent.click(input);
        fireEvent.change(input, {target: {value: 'Ford'}})
        await waitFor(() => input);
        let makeLength = await waitFor(() => screen.getByDisplayValue('Ford'))
        expect(makeLength).toBeInTheDocument();
    })
});

