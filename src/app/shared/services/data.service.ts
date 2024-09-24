import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://mr-waoow.github.io/Alpha-X-VPN-API/index.json';
  constructor(private http: HttpClient) {}
  getAllData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.clientData),
      catchError(this.handleError)
    );
  }

  getCountries(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.countries),
      catchError(this.handleError)
    );
  }
  getOfferedService(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.offeredServices),
      catchError(this.handleError)
    );
  }
  getQuestionsData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.questionsData),
      catchError(this.handleError)
    );
  }
  getBlogs(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.blogs),
      catchError(this.handleError)
    );
  }
  getProxyList(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.proxyList),
      catchError(this.handleError)
    );
  }
  getPopularRates(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.popularRates),
      catchError(this.handleError)
    );
  }
  getGeneralStatistics(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.generalStatistics),
      catchError(this.handleError)
    );
  }
  getClientData(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.clientData),
      catchError(this.handleError)
    );
  }
  getIndividualRequests(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.individualRequests),
      catchError(this.handleError)
    );
  }
  getPersonalPrices(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.personalPrices),
      catchError(this.handleError)
    );
  }
  getPersonalQuestions(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.personalQuestions),
      catchError(this.handleError)
    );
  }
  getFrequentlyAskes(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.frequentlyAskes),
      catchError(this.handleError)
    );
  }
  getFrequentlyAskesResidential(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.frequentlyAskesResidential),
      catchError(this.handleError)
    );
  }
  getProxiesProps(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.proxiesProps),
      catchError(this.handleError)
    );
  }
  getCountriesProxy(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.countriesProxy),
      catchError(this.handleError)
    );
  }
  getThemedProxy(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.themedProxy),
      catchError(this.handleError)
    );
  }
  getFlags(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.flags),
      catchError(this.handleError)
    );
  }
  getWhiteLabelFeatures(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.whiteLabelFeatures),
      catchError(this.handleError)
    );
  }
  getFreeProxies(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.freeProxies),
      catchError(this.handleError)
    );
  }
  getOperatingSystems(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.operatingSystems),
      catchError(this.handleError)
    );
  }
  getProxiesCheckers(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.proxiesCheckers),
      catchError(this.handleError)
    );
  }
  getVpnPeriods(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.vpnPeriods),
      catchError(this.handleError)
    );
  }
  getVpnPrices(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.vpnPrices),
      catchError(this.handleError)
    );
  }
  getSharedPrices(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.sharedPrices),
      catchError(this.handleError)
    );
  }
  getPlatforms(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.platforms),
      catchError(this.handleError)
    );
  }
  getVpnFeatures(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.vpnFeatures),
      catchError(this.handleError)
    );
  }
  getProvidersTitles(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.providersTitles),
      catchError(this.handleError)
    );
  }
  getMajorServices(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.majorServices),
      catchError(this.handleError)
    );
  }
  getMessengerApps(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.messengerApps),
      catchError(this.handleError)
    );
  }
  getPrivateRentFeatures(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.privateRentFeatures),
      catchError(this.handleError)
    );
  }
  getMobileProxiesProps(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.mobileProxiesProps),
      catchError(this.handleError)
    );
  }
  getScrollingFlags(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.scrollingFlags),
      catchError(this.handleError)
    );
  }
  getResidentialFeatures(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.residentialFeatures),
      catchError(this.handleError)
    );
  }
  getUniversalProxyLists(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.universalProxyLists),
      catchError(this.handleError)
    );
  }
  getDataCenterFeatures(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) => response.dataCenterFeatures),
      catchError(this.handleError)
    );
  }
  // Updated error handling method
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server-side error: ${error.status} - ${error.message}`;
    }

    // Log the error to the console (optional)
    console.error(errorMessage);

    // Return an observable with a user-friendly error message
    return throwError(
      () => new Error('Something went wrong. Please try again later.')
    );
  }
}
