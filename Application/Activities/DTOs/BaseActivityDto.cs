using System;

namespace Application.Activities.DTOs;

public class BaseActivityDto
{
    public string Title { get; set; } = "";

    public DateTime Date { get; set; }

    public string Description { get; set; } = string.Empty;

    //Location property
    public string Category { get; set; } = "";

    public string City { get; set; } = "";

    public string Venue { get; set; } = "";

    public double Latitude { get; set; }

    public double Longitude { get; set; }
}
