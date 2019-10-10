import { Component, h, Prop, Method } from '@stencil/core';

@Component({
  tag: 'sidebar-menu',
  styleUrl: 'sidebar-menu.css',
  shadow: true
})
export class SideDrawer {

  @Prop({ reflectToAttr: true }) headertitle: string;

  @Prop({ reflectToAttr: true, mutable: true }) opened: boolean;

  private onCloseDrawer = () => {
    this.opened = false;
  }



  @Method()
  public async open() {
    this.opened = true;
  }

  render() {
    return [
      <div class="backdrop" onClick={this.onCloseDrawer.bind(this)} />,
      <aside>
        <header>
          <h1>{this.headertitle}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <main><slot /></main>
      </aside>
    ];
  }
}
