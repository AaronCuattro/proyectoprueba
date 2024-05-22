'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="custom-logo" data-src="images/logotype.png">
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#additional-pages"'
                            : 'data-bs-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Secciones de la aplicación</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/sección-1.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#additional-page-c63644739ec7307229a8e1ec8c8d619e65899531839972223436baff0a7bbdabb219d59e2a03b8fa1e03740184c81499450157bb5401c3f4b62e53e4a2be2a58"' : 'data-bs-target="#xs-additional-page-c63644739ec7307229a8e1ec8c8d619e65899531839972223436baff0a7bbdabb219d59e2a03b8fa1e03740184c81499450157bb5401c3f4b62e53e4a2be2a58"' }>
                                                <span class="link-name">Sección 1</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-c63644739ec7307229a8e1ec8c8d619e65899531839972223436baff0a7bbdabb219d59e2a03b8fa1e03740184c81499450157bb5401c3f4b62e53e4a2be2a58"' : 'id="xs-additional-page-c63644739ec7307229a8e1ec8c8d619e65899531839972223436baff0a7bbdabb219d59e2a03b8fa1e03740184c81499450157bb5401c3f4b62e53e4a2be2a58"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/sección-1/sección-1.1.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Sección 1.1</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/sección-1/sección-1.2.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Sección 1.2</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/sección-1/sección-1.3.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Sección 1.3</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/sección-1/sección-1.4.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Sección 1.4</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/sección-2.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#additional-page-d53f64743340a61e19431ec58fbc028fe991a39dafd7d5398c3dad2baa223fbba0bf12a1ab3bf0c071c844fc6dabeb3bf112a7ebbdd15ea3a74202cb0f6d7560"' : 'data-bs-target="#xs-additional-page-d53f64743340a61e19431ec58fbc028fe991a39dafd7d5398c3dad2baa223fbba0bf12a1ab3bf0c071c844fc6dabeb3bf112a7ebbdd15ea3a74202cb0f6d7560"' }>
                                                <span class="link-name">Sección 2</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-d53f64743340a61e19431ec58fbc028fe991a39dafd7d5398c3dad2baa223fbba0bf12a1ab3bf0c071c844fc6dabeb3bf112a7ebbdd15ea3a74202cb0f6d7560"' : 'id="xs-additional-page-d53f64743340a61e19431ec58fbc028fe991a39dafd7d5398c3dad2baa223fbba0bf12a1ab3bf0c071c844fc6dabeb3bf112a7ebbdd15ea3a74202cb0f6d7560"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/sección-2/sección-2.1.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Sección 2.1</a>
                                            </li>
                                            <li class="link for-chapter3">
                                                <a href="additional-documentation/sección-2/sección-2.1/sección-2.1.1.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Sección 2.1.1</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/sección-2/sección-2.2.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Sección 2.2</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="link ">
                                        <a href="additional-documentation/sección-3.html" data-type="entity-link" data-context-id="additional">Sección 3</a>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-213e3fccd2e6f4ec352e2a563c8e53e977fbb33e496f7ef2896fa2e56c34fc4fc65f5c729df0a5c038836de16c96664b0d0379eded494c7a4e4dfb333d37db68"' : 'data-bs-target="#xs-components-links-module-AppModule-213e3fccd2e6f4ec352e2a563c8e53e977fbb33e496f7ef2896fa2e56c34fc4fc65f5c729df0a5c038836de16c96664b0d0379eded494c7a4e4dfb333d37db68"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-213e3fccd2e6f4ec352e2a563c8e53e977fbb33e496f7ef2896fa2e56c34fc4fc65f5c729df0a5c038836de16c96664b0d0379eded494c7a4e4dfb333d37db68"' :
                                            'id="xs-components-links-module-AppModule-213e3fccd2e6f4ec352e2a563c8e53e977fbb33e496f7ef2896fa2e56c34fc4fc65f5c729df0a5c038836de16c96664b0d0379eded494c7a4e4dfb333d37db68"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FolderPageModule.html" data-type="entity-link" >FolderPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FolderPageModule-f2f82c3ff7aa58615dc383d4e47458c1b586820582c84cadab3818cd86c9cf3b69610bcfd9c17b4123887a01b00371b7de1f8c431ac8f08be777d3c713a73d6c"' : 'data-bs-target="#xs-components-links-module-FolderPageModule-f2f82c3ff7aa58615dc383d4e47458c1b586820582c84cadab3818cd86c9cf3b69610bcfd9c17b4123887a01b00371b7de1f8c431ac8f08be777d3c713a73d6c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FolderPageModule-f2f82c3ff7aa58615dc383d4e47458c1b586820582c84cadab3818cd86c9cf3b69610bcfd9c17b4123887a01b00371b7de1f8c431ac8f08be777d3c713a73d6c"' :
                                            'id="xs-components-links-module-FolderPageModule-f2f82c3ff7aa58615dc383d4e47458c1b586820582c84cadab3818cd86c9cf3b69610bcfd9c17b4123887a01b00371b7de1f8c431ac8f08be777d3c713a73d6c"' }>
                                            <li class="link">
                                                <a href="components/FolderPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FolderPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FolderPageRoutingModule.html" data-type="entity-link" >FolderPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});