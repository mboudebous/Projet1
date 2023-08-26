import React from 'react';
import './custom.css';
import PokemonProfiles from './components/PokemonProfiles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import Favourites from './components/Favourites';
import AdvancedSearch from './components/AdvancedSearch';
import PokemonStats from './components/PokemonStats';
import { FavouritesProvider } from './modules/FavouritesContext';

function App() {
    return (
        <FavouritesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="profiles" element={<PokemonProfiles />} />
                        <Route path="favourites" element={<Favourites />} />
                        <Route path="advancedsearch" element={<AdvancedSearch />} />
                        <Route path="pokemon-stats/:name" element={<PokemonStats />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </FavouritesProvider>
    );
}

export default App;