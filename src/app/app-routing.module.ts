import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashBackPageComponent } from './pages/cash-back-page/cash-back-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { OrdersPageComponent } from './pages/orders-page/orders-page.component';
import { OrderDetailsPageComponent } from './pages/order-details-page/order-details-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { CashBackSectionComponent } from './sections/cash-back-section/cash-back-section.component';
import { HistorySectionComponent } from './sections/history-section/history-section.component';
import { RentalTransportSectionComponent } from './sections/rental-transport-section/rental-transport-section.component';
import { RentalTransportBookingSectionComponent } from './sections/rental-transport-booking-section/rental-transport-booking-section.component';
import { MostPopularDestinationsSectionComponent } from './sections/most-popular-destinations-section/most-popular-destinations-section.component';
import { PopularsTransportSectionComponent } from './sections/populars-transport-section/populars-transport-section.component';
import { SearchTransportSectionComponent } from './sections/search-transport-section/search-transport-section.component';
import { NoCarsFoundSectionComponent } from './sections/no-cars-found-section/no-cars-found-section.component';
import { OrdersSectionComponent } from './sections/orders-section/orders-section.component';
import { OrdersMoreSectionComponent } from './sections/orders-more-section/orders-more-section.component';
import { ProfileChangeSectionComponent } from './sections/profile-change-section/profile-change-section.component';
import { RentalTransportFormComponent } from './forms/rental-transport-form/rental-transport-form.component';
import { CarModalFormComponent } from './forms/car-modal-form/car-modal-form.component';
import { ChangePasswordFormComponent } from './forms/change-password-form/change-password-form.component';
import { SelectCarFormComponent } from './forms/select-car-form/select-car-form.component';
import { CashBackTableComponent } from './common/cash-back-table/cash-back-table.component';
import { HistoryTableComponent } from './common/history-table/history-table.component';
import { PageHeaderComponent } from './common/page-header/page-header.component';
import { AuthorizationComponent } from './common/authorization/authorization.component';
import { DestinationsSliderComponent } from './common/destinations-slider/destinations-slider.component';
import { DestinationItemComponent } from './common/destination-item/destination-item.component';
import { ChoiseOfTransportTabsComponent } from './common/choise-of-transport-tabs/choise-of-transport-tabs.component';
import { TransportItemComponent } from './common/transport-item/transport-item.component';
import { PageFooterComponent } from './common/page-footer/page-footer.component';
import { TotalCostComponent } from './common/total-cost/total-cost.component';
import { TotalCostCashbackComponent } from './common/total-cost-cashback/total-cost-cashback.component';
import { TotalCostMoreDetailsComponent } from './common/total-cost-more-details/total-cost-more-details.component';
import { ChoiceOfTransportTabsComponent } from './common/choice-of-transport-tabs/choice-of-transport-tabs.component';
import { SearchTransportSliderComponent } from './common/search-transport-slider/search-transport-slider.component';
import { OrdersTableComponent } from './common/orders-table/orders-table.component';
import { CarModalComponent } from './modals/car-modal/car-modal.component';
import { SelectCarModalComponent } from './modals/select-car-modal/select-car-modal.component';
import { MyAccountComponent } from './common/my-account/my-account.component';


const routes: Routes = [
    { path: 'cash-back', component: CashBackPageComponent },
    { path: 'history', component: HistoryPageComponent },
    { path: '', component: HomePageComponent },
    { path: 'cabinet/order-details', component: OrderDetailsPageComponent },
    { path: 'cabinet/orders', component: OrdersPageComponent },
    { path: 'cabinet/profile', component: ProfilePageComponent },
    { path: 'search', component: SearchPageComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    declarations: [CashBackPageComponent, HistoryPageComponent, HomePageComponent, SearchPageComponent, OrdersPageComponent, OrderDetailsPageComponent, ProfilePageComponent, CashBackSectionComponent, HistorySectionComponent, RentalTransportSectionComponent, RentalTransportBookingSectionComponent, MostPopularDestinationsSectionComponent, PopularsTransportSectionComponent, SearchTransportSectionComponent, NoCarsFoundSectionComponent, OrdersSectionComponent, OrdersMoreSectionComponent, ProfileChangeSectionComponent, RentalTransportFormComponent, CarModalFormComponent, ChangePasswordFormComponent, SelectCarFormComponent, CashBackTableComponent, HistoryTableComponent, PageHeaderComponent, AuthorizationComponent, DestinationsSliderComponent, DestinationItemComponent, ChoiseOfTransportTabsComponent, TransportItemComponent, PageFooterComponent, TotalCostComponent, TotalCostCashbackComponent, TotalCostMoreDetailsComponent, ChoiceOfTransportTabsComponent, SearchTransportSliderComponent, OrdersTableComponent, CarModalComponent, SelectCarModalComponent, MyAccountComponent]
})
export class AppRoutingModule { }
