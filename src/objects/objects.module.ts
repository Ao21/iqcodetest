import { module } from 'angular';
import Header from './header/header.directive';
import SearchNav from './search/search.directive';
import PageNav from './page-nav/page-nav.directive';
import PageNavInfo from './page-nav-info/page-nav-info.directive';
import Filter from './filter/filter.directive';
import ProfileGrid from './profile-grid/profile-grid.directive';

export default module('app.objects', [Header, SearchNav, PageNav, Filter, ProfileGrid, PageNavInfo]).name;
