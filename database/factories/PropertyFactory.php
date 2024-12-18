<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Property>
 */
class PropertyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(3),
            'price' => $this->faker->numberBetween(10000, 100000),
            'location' => $this->faker->city,
            'type' => $this->faker->randomElement(['casa', 'apartamento', 'terreno']),
            'is_active' => $this->faker->boolean(90),
        ];
    }
}
