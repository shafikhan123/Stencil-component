import { Component, h, Prop, State, Watch, Element, Listen } from '@stencil/core';

@Component({
  tag: 'country-flag',
  styleUrl: 'country-flag.css',
  shadow: true
})
export class CountryFlag {

  @Element() el: HTMLElement;

  /** Fetch data API*/
  @Prop({ mutable: true }) public getAPI: any = '';

  /** API fetch mode */
  @Prop() public mode: any = 'Get';

  /** Store countryConfig */
  @State() countryConfig: object = [];

  /** Store country value */
  @Prop() public country: string = '';

  /** Store background color */
  @Prop({ mutable: true }) public backgroundcolor: any = '';

  /** Set list lable color */
  @Prop({ mutable: true }) public listlablecolor: any = '';

  /** Set column layout */
  @Prop({ mutable: true }) public column: any = 3;

  @Watch('country')
  watchHandler(newValue: any) {
    this.country = newValue;
  }

  private getData = async () => {
    let response = await fetch(this.getAPI);

    if (response.ok) { // if HTTP-status is 200-299

      //TODO remove this once have proper JSON data on S3 bucket
      this.countryConfig = [
        {
          machineName: "ar",
          label: "Argentina",
          languages: [
            {
              label: "Español",
              machineName: "es",
              shortName: "Es",
              redirectUrl: "#.ar"
            }
          ]
        },
        {
          machineName: "au",
          label: "Australia",
          languages: [
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.au"
            }
          ]
        },
        {
          machineName: "at",
          label: "Austria",
          languages: [
            {
              label: "Deutsch",
              shortName: "De",
              machineName: "de",
              redirectUrl: "#.at"
            }
          ]
        },
        {
          machineName: "by",
          label: "Belarus",
          languages: [
            {
              label: "Belarusian",
              shortName: "By",
              machineName: "by",
              redirectUrl: "#.by"
            },
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.by/en"
            }
          ]
        },
        {
          machineName: "be",
          label: "Belgium",
          languages: [
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.be"
            },
            {
              label: "Nederlands",
              shortName: "Nl",
              machineName: "nl",
              redirectUrl: "#.be/nl-be"
            },
            {
              label: "Français",
              shortName: "Fr",
              machineName: "fr",
              redirectUrl: "#.be/fr-be"
            }
          ]
        },
        {
          machineName: "br",
          label: "Brazil",
          languages: [
            {
              label: "Português",
              shortName: "Pr",
              machineName: "pr",
              redirectUrl: "#.br"
            }
          ]
        },
        {
          machineName: "bg",
          label: "Bulgaria",
          languages: [
            {
              label: "Български",
              shortName: "Bg",
              machineName: "bg",
              redirectUrl: "#.bg"
            }
          ]
        },
        {
          machineName: "ca",
          label: "Canada",
          languages: [
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.ca"
            },
            {
              label: "Français",
              shortName: "Fr",
              machineName: "fr",
              redirectUrl: "#.ca/fr"
            }
          ]
        },
        {
          machineName: "cn",
          label: "China",
          languages: [
            {
              label: "ä¸­æ–‡",
              shortName: "Cn",
              machineName: "cn",
              redirectUrl: "#.cn"
            },
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.cn/index_en.aspx"
            }
          ]
        },
        {
          machineName: "co",
          label: "Colombia",
          languages: [
            {
              label: "Español",
              shortName: "Es",
              machineName: "es",
              redirectUrl: "#.co"
            }
          ]
        },
        {
          machineName: "hr",
          label: "Croatia",
          languages: [
            {
              label: "Croatian",
              shortName: "Hr",
              machineName: "hr",
              redirectUrl: "#.hr"
            }
          ]
        },
        {
          machineName: "cz",
          label: "Czech Republic",
          languages: [
            {
              label: "Čeština",
              shortName: "Cz",
              machineName: "cz",
              redirectUrl: "#.cz"
            }
          ]
        },
        {
          machineName: "dk",
          label: "Denmark",
          languages: [
            {
              label: "Dansk",
              shortName: "Dk",
              machineName: "dk",
              redirectUrl: "#.dk"
            }
          ]
        },
        {
          machineName: "ec",
          label: "Ecuador",
          languages: [
            {
              label: "Español",
              shortName: "Ec",
              machineName: "ec",
              redirectUrl: "#.ec"
            }
          ]
        },
        {
          machineName: "et",
          label: "Estonia",
          languages: [
            {
              label: "Eesti",
              shortName: "Ee",
              machineName: "et",
              redirectUrl: "#.ee"
            },
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.ee/en"
            }
          ]
        },
        {
          machineName: "fi",
          label: "Finland",
          languages: [
            {
              label: "Suomalainen",
              shortName: "Fi",
              machineName: "fi",
              redirectUrl: "#.fi"
            }
          ]
        },
        {
          machineName: "fr",
          label: "France",
          languages: [
            {
              label: "Français",
              shortName: "Fr",
              machineName: "fr",
              redirectUrl: "#.fr"
            }
          ]
        },
        {
          machineName: "de",
          label: "Germany",
          languages: [
            {
              label: "Deutsch",
              shortName: "De",
              machineName: "de",
              redirectUrl: "#.de"
            }
          ]
        },
        {
          machineName: "gr",
          label: "Greece",
          languages: [
            {
              label: "ελληνικά",
              shortName: "Gr",
              machineName: "gr",
              redirectUrl: "#.gr"
            }
          ]
        },
        {
          machineName: "hk",
          label: "Hong Kong",
          languages: [
            {
              label: "繁體中文",
              shortName: "Hk",
              machineName: "hk",
              redirectUrl: "#.hk"
            },
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.hk/en"
            }
          ]
        },
        {
          machineName: "hu",
          label: "Hungary",
          languages: [
            {
              label: "Magyar",
              shortName: "Hu",
              machineName: "hu",
              redirectUrl: "#.hu"
            }
          ]
        },
        {
          machineName: "india",
          label: "India",
          languages: [
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#"
            }
          ]
        },
        {
          machineName: "Indonesia",
          label: "Indonesia",
          languages: [
            {
              label: "Indonesian",
              shortName: "In",
              machineName: "in",
              redirectUrl: "#peduli"
            }
          ]
        },
        {
          machineName: "ie",
          label: "Ireland",
          languages: [
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#"
            }
          ]
        },
        {
          machineName: "il",
          label: "Israel",
          languages: [
            {
              label: "עברית",
              shortName: "Il",
              machineName: "il",
              redirectUrl: "#.co.il"
            }
          ]
        },
        {
          machineName: "it",
          label: "Italy",
          languages: [
            {
              label: "Italiano",
              shortName: "It",
              machineName: "it",
              redirectUrl: "#.it"
            }
          ]
        },
        {
          machineName: "jp",
          label: "Japan",
          languages: [
            {
              label: "日本の",
              shortName: "Jp",
              machineName: "jp",
              redirectUrl: "#"
            }
          ]
        },
        {
          machineName: "kr",
          label: "Korea",
          languages: [
            {
              label: "한국의",
              shortName: "Kr",
              machineName: "kr",
              redirectUrl: "#.co.kr"
            }
          ]
        },
        {
          machineName: "lv",
          label: "Latvia",
          languages: [
            {
              label: "Latvian",
              shortName: "Lv",
              machineName: "lv",
              redirectUrl: "#.lv"
            },
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.lv/en"
            }
          ]
        },
        {
          machineName: "lt",
          label: "Lithuania",
          languages: [
            {
              label: "Lithuanian",
              shortName: "Lt",
              machineName: "lt",
              redirectUrl: "#disclosure.lt"
            },
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#disclosure.lt/en"
            }
          ]
        },
        {
          machineName: "my",
          label: "Malaysia",
          languages: [
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.my"
            }
          ]
        },
        {
          machineName: "mx",
          label: "Mexico",
          languages: [
            {
              label: "Español",
              shortName: "Es",
              machineName: "es",
              redirectUrl: "#.mx"
            }
          ]
        },
        {
          machineName: "nl",
          label: "Netherlands",
          languages: [
            {
              label: "Nederlands",
              shortName: "Nl",
              machineName: "nl",
              redirectUrl: "#.nl"
            }
          ]
        },
        {
          machineName: "nz",
          label: "New Zealand",
          languages: [
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.co.nz"
            }
          ]
        },
        {
          machineName: "no",
          label: "Norway",
          languages: [
            {
              label: "Norsk",
              shortName: "No",
              machineName: "no",
              redirectUrl: "#.no"
            }
          ]
        },
        {
          machineName: "pk",
          label: "Pakistan",
          languages: [
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.pk"
            }
          ]
        },
        {
          machineName: "pe",
          label: "Peru",
          languages: [
            {
              label: "Español",
              shortName: "Es",
              machineName: "es",
              redirectUrl: "#.pe"
            }
          ]
        },
        {
          machineName: "ph",
          label: "Philippines",
          languages: [
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.ph"
            }
          ]
        },
        {
          machineName: "pl",
          label: "Poland",
          languages: [
            {
              label: "Polski",
              shortName: "Pl",
              machineName: "pl",
              redirectUrl: "#.pl"
            }
          ]
        },
        {
          machineName: "pt",
          label: "Portugal",
          languages: [
            {
              label: "Português",
              shortName: "Pt",
              machineName: "pt",
              redirectUrl: "#.pt"
            }
          ]
        },
        {
          machineName: "ru",
          label: "Russia",
          languages: [
            {
              label: "Русский",
              shortName: "Ru",
              machineName: "ru",
              redirectUrl: "#.ru"
            }
          ]
        },
        {
          machineName: "rs",
          label: "Serbia",
          languages: [
            {
              label: "Serbian",
              shortName: "Rs",
              machineName: "rs",
              redirectUrl: "#.rs"
            }
          ]
        },
        {
          machineName: "sg",
          label: "Singapore",
          languages: [
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.sg"
            }
          ]
        },
        {
          machineName: "si",
          label: "Slovenia",
          languages: [
            {
              label: "Slovenian",
              shortName: "Si",
              machineName: "si",
              redirectUrl: "#.si"
            }
          ]
        },
        {
          machineName: "sk",
          label: "Slovakia",
          languages: [
            {
              label: "Slovenský",
              shortName: "Sk",
              machineName: "sk",
              redirectUrl: "#.sk"
            }
          ]
        },
        {
          machineName: "za",
          label: "South Africa",
          languages: [
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.co.za"
            }
          ]
        },
        {
          machineName: "es",
          label: "Spain",
          languages: [
            {
              label: "Español",
              shortName: "Es",
              machineName: "es",
              redirectUrl: "#.es"
            }
          ]
        },
        {
          machineName: "se",
          label: "Sweden",
          languages: [
            {
              label: "Svenska",
              shortName: "Sv",
              machineName: "sv",
              redirectUrl: "#.se"
            }
          ]
        },
        {
          machineName: "ch",
          label: "Switzerland",
          languages: [
            {
              label: "Deutsch",
              shortName: "De",
              machineName: "de",
              redirectUrl: "#.ch"
            },
            {
              label: "Français",
              shortName: "Fr",
              machineName: "fr",
              redirectUrl: "#.ch/fr"
            }
          ]
        },
        {
          machineName: "tw",
          label: "Taiwan",
          languages: [
            {
              label: "Taiwan",
              shortName: "Tw",
              machineName: "tw",
              redirectUrl: "#.tw"
            }
          ]
        },
        {
          machineName: "th",
          label: "Thailand",
          languages: [
            {
              label: "ภาษาไทย",
              shortName: "Th",
              machineName: "th",
              redirectUrl: "#.co.th"
            }
          ]
        },
        {
          machineName: "tn",
          label: "Tunisia",
          languages: [
            {
              label: "Français",
              shortName: "Fr",
              machineName: "fr",
              redirectUrl: "#.tn"
            }
          ]
        },
        {
          machineName: "tr",
          label: "Turkey",
          languages: [
            {
              label: "Türk",
              shortName: "Tr",
              machineName: "tr",
              redirectUrl: "#.tr"
            }
          ]
        },
        {
          machineName: "uk",
          label: "United Kingdom",
          languages: [
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.co.uk"
            }
          ]
        },
        {
          machineName: "us",
          label: "United States",
          languages: [
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#"
            }
          ]
        },
        {
          machineName: "ua",
          label: "Ukraine",
          languages: [
            {
              label: "Ukrainian",
              shortName: "Uk",
              machineName: "uk",
              redirectUrl: "#.ua"
            }
          ]
        },
        {
          machineName: "vn",
          label: "Vietnam",
          languages: [
            {
              label: "Tiếng Việt",
              shortName: "Vi",
              machineName: "vi",
              redirectUrl: "#.vn"
            },
            {
              label: "English",
              shortName: "En",
              machineName: "en",
              redirectUrl: "#.vn/en"
            }
          ]
        },
        {
          machineName: "ve",
          label: "Venezuela",
          languages: [
            {
              label: "Español",
              shortName: "Es",
              machineName: "es",
              redirectUrl: "#.es"
            }
          ]
        }
      ];

      this.genrateFlag(this.countryConfig);
    } else {
      console.log("HTTP-Error: " + response.status);
    }
  }

  componentDidLoad() {
    this.getData();
  }

  private genrateFlag = (flagData: any) => {

    let itemContainer = document.querySelector('country-flag').shadowRoot.querySelector('.territory-main-container');

    let territory_list_container: HTMLElement = itemContainer!.querySelector('.territory-list-container') as HTMLElement;

    territory_list_container.style.backgroundColor = this.backgroundcolor;

    let flagLists: HTMLElement = itemContainer!.querySelector('ul.territory-select-list') as HTMLElement;
    flagLists.style.columnCount = this.column;

    let $defaultTerritoryItemClass = 'territory-select-list-item';

    let $default_falg = itemContainer!.querySelectorAll('.default-territory'), i: number;

    if (flagData.length > 0) {

      flagData.map((data: any) => {

        let $territoryName = "territory-name-" + data.machineName;

        let newelement = document.createElement('li');

        newelement.classList.add($defaultTerritoryItemClass, data.machineName);

        let newDive = document.createElement('div');

        newDive.innerHTML = '<span class="territory-flag"></span>' + data.label;

        data.languages.map((item: any) => {

          newDive.insertAdjacentHTML('beforeend', '<span class="language-separator"> - </span><a href="' + item.redirectUrl + '" title="' + item.label + '">' + item.label + '</a>');

        })
        newDive.classList.add('territory-name', $territoryName);

        if (data.label === this.country) {
          newelement.classList.add('active-country');
        }

        newelement.append(newDive);
        flagLists.append(newelement);

      });

      if (this.country.length !== 0) {
        var result = flagData.filter(obj => {
          return obj.label === this.country;
        })
        itemContainer.querySelector('.territory-current .default-territory ').append(result[0].label);

        let languages = [];
        result.map((lang) => {
          languages.push(lang.languages)
        })

        languages.map((item) => {
          let _selectedLanguage = [];
          for (let i = 0; i < item.length; i++) {

            let htmlLanguage = document.querySelector('html').lang;

            if (item[i].machineName == htmlLanguage) {
              item[i].class = 'active'
              _selectedLanguage.push(item[i]);
            }
            else {
              item[i].class = 'inactive'
            }

            itemContainer!.querySelector('.territory-languages').insertAdjacentHTML('beforeend', '<a href="' + item[i].redirectUrl + '" title="' + item[i].label + '"class="' + item[i].class + '">' + item[i].label + ' (' + item[i].shortName + ')' + '</a> ');
          }

          _selectedLanguage.map((data) => {
            itemContainer!.querySelector('.default-territory-language').innerHTML = data.shortName;
          })

        })

        for (i = 0; i < $default_falg.length; ++i) {
          $default_falg[i].classList.add('default-territory-' + result[0].machineName)
        }
      }
    }

    let listAnchorText = itemContainer.querySelectorAll('ul.territory-select-list li a');
    for (let j = 0; j < listAnchorText.length; ++j) {
      let item: HTMLElement = listAnchorText[j] as HTMLElement;
      item.style.color = this.listlablecolor;
    }
  }

  @Listen('mouseover')
  public onHover(_e: MouseEvent) {
    const _Items = this.el.shadowRoot.querySelector('.territory-list-container');
    _Items.classList.add('active');
  }

  @Listen('mouseout')
  public onHoverOut(_e: MouseEvent) {
    const _Items = this.el.shadowRoot.querySelector('.territory-list-container');
    _Items.classList.remove('active');
  }

  render() {
    return (
      <div class="territory-main-container" >
        <span class="caret-up"></span>
        <div class="default-territory top-section">
          <span class="default-territory-flag">&nbsp;</span>
          <span class="default-territory-language">&nbsp;</span>
        </div>
        <div class="territory-list-container">
          <div class="territory-list-container-header">
            <div class="territory-current">
              <div class="territory-current-header">Current country/region and language options: </div>
              <div class="default-territory"><span class="default-territory-flag">&nbsp;</span> </div>
              <div class="territory-languages"></div>
            </div>
          </div>
          <ul class="territory-select-list"></ul></div>
      </div>
    );
  }
}
