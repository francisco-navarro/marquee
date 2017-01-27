import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/shared';

export class LoginComponent {
  constructor(
    private router: Router,
    private authService: AuthenticationService) {}
}