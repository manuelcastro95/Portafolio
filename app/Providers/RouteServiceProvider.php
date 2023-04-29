<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use Symfony\Component\Finder\Finder;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/home';
    protected $namespace = 'App\Http\Controllers';
    protected $namespaceapi = 'App\Http\Controllers\Api';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */

     public function map()
    {
        $this->mapApiRoutes();
        $this->mapWebRoutes();
    }

    public function boot(): void
    {
        $this->configureRateLimiting();

        parent::boot();
    }


    protected function mapWebRoutes()
    {
        Route::middleware('web')
             ->namespace($this->namespace)
              ->group(function(){
                $this->requireRoutes('routes/web');
             });
    }

    protected function mapApiRoutes()
    {
        Route::prefix('api')
             ->middleware('api')
             ->namespace($this->namespaceapi)
             ->group(function(){
                $this->requireRoutes('routes/api');
             });
    }

    public function requireRoutes($path){
        return collect(
            Finder::create()->in(base_path($path))->name('*.php'))->each(function($file){
                require $file->getRealPath();
            });
    }

    /**
     * Configure the rate limiters for the application.
     */
    protected function configureRateLimiting(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });
    }
}
