import { Version } from '@microsoft/sp-core-library';
import {
    BaseClientSideWebPart,
    IPropertyPaneConfiguration,
    PropertyPaneTextField
  } from '@microsoft/sp-webpart-base';

import { escape } from '@microsoft/sp-lodash-subset';

import * as strings from 'AngularElementsWebPartStrings';

/** Include Angular Elements JS and Style */
import 'angular-elements/dist/AngularElements/main';
import 'angular-elements/dist/AngularElements/polyfills';
require('angular-elements/dist/AngularElements/styles.css');

export interface IAngularElementsWebPartProps {
  description: string;
}

export default class AngularElementsWebPart extends BaseClientSideWebPart<IAngularElementsWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<app-angular-elements-web-part description="${ this.properties.description }"></app-angular-elements-web-part>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
