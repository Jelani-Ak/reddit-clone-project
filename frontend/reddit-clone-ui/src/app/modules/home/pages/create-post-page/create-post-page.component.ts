import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTabGroup } from '@angular/material/tabs';
import { ActivatedRoute, Params } from '@angular/router';
import { SnackbarService } from 'app/core/services/snackbar/snackbar.service';

@Component({
  selector: 'app-create-post-page',
  templateUrl: './create-post-page.component.html',
  styleUrls: ['./create-post-page.component.css'],
})
export class CreatePostPageComponent implements AfterViewInit {
  @ViewChild('CreatePostTabs', { static: false }) createPostTabGroup!: MatTabGroup;

  public createPostForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    content: [''],
    mediaFromComputer: [''],
    mediaFromUrl: ['', Validators.required],
    poll: [''],
  } as AbstractControlOptions);

  public titleValue: string = '';
  public contentValue: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private snackbarService: SnackbarService
  ) {}

  public ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe({
      next: (queryParams: Params) => {
        const action = queryParams['action'];

        switch (action) {
          case 'create-post':
            this.createPostTabGroup.selectedIndex = 0;
            break;
          case 'create-from-computer':
            this.createPostTabGroup.selectedIndex = 1;
            break;
          case 'create-from-link':
            this.createPostTabGroup.selectedIndex = 2;
            break;
        }
      },
      complete: () => {
        console.log('Succesfully selected tab index');
      },
      error: (error) => {
        console.error('Failed to select tab index', error);
      },
    });
  }

  public submitPost() {
    this.snackbarService.displayToast('Created post sucessfully', 'Ok');
  }
}
