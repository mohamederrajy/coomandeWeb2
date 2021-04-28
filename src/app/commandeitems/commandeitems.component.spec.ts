import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeitemsComponent } from './commandeitems.component';

describe('CommandeitemsComponent', () => {
  let component: CommandeitemsComponent;
  let fixture: ComponentFixture<CommandeitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandeitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
