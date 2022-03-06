import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetafrenzyGuard } from 'ngx-metafrenzy';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AppConst } from './class/appconst';


var base = new AppConst;
var canonicalHome = base.baseURL;
var canonicalAbout = base.baseURL + 'about';
var canonicalBlog = base.baseURL + 'blog';
var canonicalPortfolio = base.baseURL + 'portfolio';
var canonicalLegal = base.baseURL + 'legal';

const routes: Routes = [
  // Home route has all metadata and examples
  { path: '',
    component: HomeComponent,
    canActivate: [MetafrenzyGuard],
      data: {
        metafrenzy: {
          title: 'Home',
          tags: [
            {
              name: 'description',
              content: 'Full stack angular developer with an accessibility focus'
            }, {
              name: 'og:title',
              content: 'Full Stack Developer Site'
            }, {
              name: 'og:description',
              content: 'Full stack angular developer with an accessibility focus'
            }, {
              name: 'og:url',
              content: canonicalHome
            }, {
              name: 'og:image',
              content: base.cloudMediaURL + base.opengraphPath + 'AdobeStock_225084966_Preview.jpeg'
            },
            /*----- Section of metadata we won't need to change on every page
            {
              name: 'article:section',
              content: 'Contract angular developer'
            }, {
              name: 'twitter:image',
              content: 'Contract angular developer'
            }, {
              name: 'og:type', //Description of image
              content: 'website'
            }, {
            */
          ],
          links: [
            {
                rel: 'canonical',
                href: canonicalHome
            }
          ]
        }
      }
    },
    // About route has the minimum required
    { path: 'about',
      component: AboutComponent,
      canActivate: [MetafrenzyGuard],
      data: {
          metafrenzy: {
              title: 'About Compliance is Fruitful',
              tags: [
            {
              name: 'description',
              content: 'All about Sunny the developer'
            }, {
              name: 'og:title',
              content: 'About me'
            }, {
              name: 'og:description',
              content: 'All about Sunny the developer'
            }, {
              name: 'og:url',
              content: canonicalHome
            }, {
              name: 'og:image',
              content: base.cloudMediaURL + base.opengraphPath + 'pexels-thisisengineering-3861958.jpg'
            },
              ],
              links: [
                {
                    rel: 'canonical',
                    href: canonicalAbout
                }
              ]
          }
        }
      },
      { path: 'blog',
        component: BlogComponent,
        canActivate: [MetafrenzyGuard],
        data: {
            metafrenzy: {
              title: 'Blog',
              tags: [
                {
                  name: 'description',
                  content: 'Blog for Sunny the developer'
                }, {
                    name: 'og:title',
                    content: 'Blog for Compliance is Fruitful'
                }, {
                    name: 'og:description',
                    content: 'Blogging about all the things'
                }, {
                  name: 'og:url',
                  content: canonicalHome
                }, {
                  name: 'og:image',
                  content: base.cloudMediaURL + base.opengraphPath + 'colorful-umbrella-1176220.jpg'
                },
              ],
              links: [
                {
                  rel: 'canonical',
                  href: canonicalBlog
                }
              ]
            }
          }
        },
        { path: 'portfolio',
          component: PortfolioComponent,
          canActivate: [MetafrenzyGuard],
          data: {
              metafrenzy: {
                  title: 'Portfolio of work',
                  tags: [
                    {
                      name: 'description',
                      content: 'A combined portfolio of work done by Compliance is Fruitful'
                    }, {
                      name: 'og:title',
                      content: 'Check out this portfolio'
                    }, {
                      name: 'og:description',
                      content: 'Portfolio of work for Compliance is Fruitful'
                    }, {
                      name: 'og:url',
                      content: canonicalHome
                    }, {
                      name: 'og:image',
                      content: base.cloudMediaURL + base.opengraphPath + 'pexels-pixabay-36717.jpg'
                    },
                  ],
                  links: [
                    {
                      rel: 'canonical',
                      href: canonicalPortfolio
                    }
                  ]
              }
            }
          },
          { path: 'legal',
            component: PortfolioComponent,
            canActivate: [MetafrenzyGuard],
            data: {
                metafrenzy: {
                    title: 'Portfolio of work',
                    tags: [
                      {
                        name: 'description',
                        content: 'All about Sunny the developer'
                      }, {
                        name: 'og:title',
                        content: 'Check out this portfolio'
                      }, {
                        name: 'og:description',
                        content: 'Portfolio of work for Compliance is Fruitful'
                      }, {
                        name: 'og:url',
                        content: canonicalHome
                      }, {
                        name: 'og:image',
                        content: base.cloudMediaURL + base.opengraphPath + 'colorful-umbrella-1176220.jpg'
                      },
                    ],
                    links: [
                      {
                          rel: 'canonical',
                          href: canonicalLegal
                      }
                    ]
                }
              }
            },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
