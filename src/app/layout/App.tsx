import '../styles/main-styles.css';
import MainHeader from "./MainHeader";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage';
import NewbiePage from './routes/NewbiePage';
import BrowseAssetsPage from './routes/asset/browse asset/BrowseAssetsPage';
import AssetPage from './routes/asset/AssetPage';
import UploadAssetPage from './routes/asset/UploadAssetPage';
import LogInPage from './routes/account/LogInPage';
import RegisterPage from './routes/account/RegisterPage';
import ProfilePage from './routes/account/ProfilePage';
import { assetPagePath, browseAssetsPagePath, homePagePath, loginPagePath, myProfilePagePath, newbiePagePath, profilePagePath, registerPagePath, uploadPagePath } from '../utils/paths/routerPaths';
import { useState } from 'react';

function App()
{
  const [username, setUsername] = useState<string | null>(null);

  function setUser(newUsername: string)
  {
    setUsername(newUsername);
  }

  function logoutUser()
  {
    setUsername(null);
  }

  return (
    <BrowserRouter>
      <MainHeader username={ username } logoutUser={ () => setUsername(null) } style={ { marginBottom: '1.5em' } } />
      <Routes>
        <Route path={ homePagePath } element={ <HomePage /> } />
        <Route path={ newbiePagePath } element={ <NewbiePage /> } />
        <Route path={ browseAssetsPagePath } element={ <BrowseAssetsPage /> } />
        <Route path={ assetPagePath(':assetId') } element={ <AssetPage /> } />
        <Route path={ uploadPagePath } element={ <UploadAssetPage /> } />
        <Route path={ loginPagePath } element={ <LogInPage setUser={ setUser } /> } />
        <Route path={ registerPagePath } element={ <RegisterPage setUser={ setUser } /> } />
        <Route path={ profilePagePath } element={ <ProfilePage /> } />
        <Route path={ myProfilePagePath } element={ <ProfilePage username={ username || undefined } setUser={ setUser } /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
