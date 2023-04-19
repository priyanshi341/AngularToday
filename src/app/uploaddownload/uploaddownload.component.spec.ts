import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaddownloadComponent } from './uploaddownload.component';

describe('UploaddownloadComponent', () => {
  let component: UploaddownloadComponent;
  let fixture: ComponentFixture<UploaddownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploaddownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaddownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
