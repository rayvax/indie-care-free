import '../styles/main-styles.css';
import MainHeader from "./MainHeader";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './routes/HomePage';
import NewbiePage from './routes/NewbiePage';
import BrowseAssetsPage from './routes/asset/BrowseAssetsPage';
import AssetPage from './routes/asset/AssetPage';
import UploadAssetPage from './routes/asset/UploadAssetPage';
import LogInPage from './routes/account/LogInPage';
import RegisterPage from './routes/account/RegisterPage';
import ProfilePage from './routes/account/ProfilePage';

function App()
{
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/new-to-icf' element={ <NewbiePage /> } />
        <Route path='/assets' element={ <BrowseAssetsPage /> } />
        <Route path='/assets/:assetId' element={ <AssetPage /> } />
        <Route path='/upload' element={ <UploadAssetPage /> } />
        <Route path='/login' element={ <LogInPage /> } />
        <Route path='/register' element={ <RegisterPage /> } />
        <Route path='/profile' element={ <ProfilePage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
