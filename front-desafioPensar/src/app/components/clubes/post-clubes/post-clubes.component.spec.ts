import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostClubesComponent } from './post-clubes.component';

describe('PostClubesComponent', () => {
  let component: PostClubesComponent;
  let fixture: ComponentFixture<PostClubesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostClubesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostClubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
