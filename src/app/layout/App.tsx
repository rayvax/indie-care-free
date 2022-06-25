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
import { assetPagePath, browseAssetsPagePath, homePagePath, loginPagePath, newbiePagePath, profilePagePath, registerPagePath, uploadPagePath } from '../utils/paths/routerPaths';

function App()
{
  return (
    <BrowserRouter>
      <MainHeader style={ { marginBottom: '1.5em' } } />
      <Routes>
        <Route path={ homePagePath } element={ <HomePage /> } />
        <Route path={ newbiePagePath } element={ <NewbiePage /> } />
        <Route path={ browseAssetsPagePath } element={ <BrowseAssetsPage /> } />
        <Route path={ assetPagePath(':assetId') } element={ <AssetPage /> } />
        <Route path={ uploadPagePath } element={ <UploadAssetPage /> } />
        <Route path={ loginPagePath } element={ <LogInPage /> } />
        <Route path={ registerPagePath } element={ <RegisterPage /> } />
        <Route path={ profilePagePath } element={ <ProfilePage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
